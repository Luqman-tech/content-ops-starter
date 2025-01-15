import React from 'react';
import { allContent } from '../utils/local-content';
import { getComponent } from '../components/components-registry';
import { resolveStaticProps } from '../utils/static-props-resolvers';
import { resolveStaticPaths } from '../utils/static-paths-resolvers';

function Page(props) {
    const { page, site } = props;
    const { modelName } = page.__metadata;
    if (!modelName) {
        throw new Error(`page has no type, page '${props.path}'`);
    }
    const PageLayout = getComponent(modelName);
    if (!PageLayout) {
        throw new Error(`no page layout matching the page model: ${modelName}`);
    }
    return <PageLayout page={page} site={site} />;
}

export function getStaticPaths() {
    const data = allContent();
    const paths = resolveStaticPaths(data);
    return { paths, fallback: 'blocking' }; // Changed to 'blocking' for fallback
}

export async function getStaticProps({ params }) {
    const data = allContent();
    const urlPath = '/' + (params.slug || []).join('/');
    const props = await resolveStaticProps(urlPath, data);

    // Log the structure of the returned data for debugging
    console.log('Structure of returned data:', { data, props });

    // Log the props and data for debugging
    console.log('Data from allContent:', data);
    console.log('Props returned from resolveStaticProps:', props);

    // Log the props for debugging
    console.log('Props returned from resolveStaticProps:', props);

    // Check if props are empty and redirect to index.md if so
    if (!props || Object.keys(props).length === 0) {
        return {
            redirect: {
                destination: '/index.md',
                permanent: false
            }
        };
    }

    return { props };
}

export default Page;
