import {
    getRootPagePath,
    resolveReferences,
    getAllPostsSorted,
    getAllNonFeaturedPostsSorted,
    getAllCategoryPostsSorted,
    getPagedItemsForPage,
    isPublished,
    mapDeepAsync
} from './data-utils';

export function resolveStaticProps(urlPath, data) {
    // Log the URL path for debugging
    console.log('Resolving static props for URL path:', urlPath);

    // get root path of paged path: /blog/page/2 => /blog
    const rootUrlPath = getRootPagePath(urlPath);
    const pageData = data.pages.find((page) => page.__metadata.urlPath === rootUrlPath);

    // Check if page data is found
    if (!pageData) {
        console.error(`No page found for URL path: ${rootUrlPath}`);
        throw new Error(`No page found for URL path: ${rootUrlPath}`);
    }

    const { __metadata, ...rest } = pageData;

    // Log the metadata for debugging
    console.log('Page metadata:', __metadata);

    // Ensure the type is set correctly
    if (!__metadata.modelName) {
        console.warn(`Page data for ${rootUrlPath} has no modelName. Data:`, pageData);
    }

    const props = {
        page: {
            __metadata: {
                ...__metadata,
                // override urlPath in metadata with paged path: /blog => /blog/page/2
                urlPath
            },
            ...rest
        },
        ...data.props
    };

    // Log the resolved props for debugging
    console.log('Resolved props:', props);

    return mapDeepAsync(
        props,
        async (value, keyPath, stack) => {
            const objectType = value?.__metadata?.modelName;
            if (objectType && StaticPropsResolvers[objectType]) {
                const resolver = StaticPropsResolvers[objectType];
                return resolver(value, data, { keyPath, stack });
            }
            // Ensure undefined values are set to null to avoid serialization issues
            if (value === undefined) {
                return null;
            }
            return value;
        },
        { postOrder: true }
    );
}

const StaticPropsResolvers = {
    PostLayout: (props, data, debugContext) => {
        // Ensure author is not undefined
        if (props.author === undefined) {
            props.author = null;
        }
        return props;
    },
    PostFeedLayout: (props, data) => {
        const numOfPostsPerPage = props.numOfPostsPerPage ?? 10;
        let allPosts = getAllNonFeaturedPostsSorted(data.objects);
        if (!process.env.stackbitPreview) {
            allPosts = allPosts.filter(isPublished);
        }
        const paginationData = getPagedItemsForPage(props, allPosts, numOfPostsPerPage);
        const items = resolveReferences(paginationData.items, ['author', 'category'], data.objects);
        // Ensure author is not undefined in each item
        items.forEach((item) => {
            if (item.author === undefined) {
                item.author = null;
            }
        });
        return {
            ...props,
            ...paginationData,
            items
        };
    },
    PostFeedCategoryLayout: (props, data) => {
        const categoryId = props.__metadata?.id;
        const numOfPostsPerPage = props.numOfPostsPerPage ?? 10;
        let allCategoryPosts = getAllCategoryPostsSorted(data.objects, categoryId);
        if (!process.env.stackbitPreview) {
            allCategoryPosts = allCategoryPosts.filter(isPublished);
        }
        const paginationData = getPagedItemsForPage(props, allCategoryPosts, numOfPostsPerPage);
        const items = resolveReferences(paginationData.items, ['author', 'category'], data.objects);
        // Ensure author is not undefined in each item
        items.forEach((item) => {
            if (item.author === undefined) {
                item.author = null;
            }
        });
        return {
            ...props,
            ...paginationData,
            items
        };
    },
    RecentPostsSection: (props, data) => {
        let allPosts = getAllPostsSorted(data.objects);
        if (!process.env.stackbitPreview) {
            allPosts = allPosts.filter(isPublished);
        }
        allPosts = allPosts.slice(0, props.recentCount || 6);
        const recentPosts = resolveReferences(allPosts, ['author', 'category'], data.objects);
        // Ensure author is not undefined in each post
        recentPosts.forEach((post) => {
            if (post.author === undefined) {
                post.author = null;
            }
        });
        return {
            ...props,
            posts: recentPosts
        };
    },
    FeaturedPostsSection: (props, data, debugContext) => {
        const resolvedProps = resolveReferences(props, ['posts.author', 'posts.category'], data.objects, debugContext);
        // Ensure author is not undefined in each post
        resolvedProps.posts?.forEach((post) => {
            if (post.author === undefined) {
                post.author = null;
            }
        });
        return resolvedProps;
    },
    FeaturedPeopleSection: (props, data, debugContext) => {
        return resolveReferences(props, ['people'], data.objects, debugContext);
    }
};
