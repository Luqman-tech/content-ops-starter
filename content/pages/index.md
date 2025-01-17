---
title: Home
slug: /
type: PageLayout
sections:
  - type: GenericSection
    title:
      text: A VISION OF A BETTER FUTURE.
      color: text-dark
    subtitle: ''
    text: >+
      #### *Glimpse a world where innovation not only shapes progress but
      becomes the cornerstone of a harmonious existence for both people and
      nature.*

    actions: []
    media:
      url: /images/MtKilimanjaroElephant.jpg
      altText: Unblock your team boost your time to production preview
      elementId: ''
      type: ImageBlock
    badge:
      label: ''
      color: text-primary
      type: Badge
    elementId: ''
    colors: bg-neutral-fg-dark
    styles:
      self:
        alignItems: center
        flexDirection: row
        padding:
          - pt-16
          - pl-16
          - pb-16
          - pr-16
        justifyContent: flex-end
    backgroundImage:
      type: BackgroundImage
      altText: altText of the image
      backgroundSize: auto
      backgroundPosition: center
      backgroundRepeat: no-repeat
      opacity: 100
  - title:
      text: ''
      color: text-dark
      styles:
        self:
          textAlign: center
      type: TitleBlock
    subtitle: >-
      OUR GOAL: HAVE COMMUNITIES UPLIFT THEMSELVES USING THE POWER OF INNOVATION
      AND TECHNOLOGY.
    text: >+
      <div style="text-align: center">#### *<div>We are a social enterprise
      consisting of experts with backgrounds and rich experience in community
      development, environmental science, business development, engineering, and
      technology. We leverage data-driven technology, business, and
      environmental expertise to implement innovative project strategies that
      enhance the overall well-being of the environment, the people, and the
      fiscal standing of the parties involved, all at once.</div>*</div>

    badge:
      label: OUR STORY
      color: text-dark
      styles:
        self:
          textAlign: center
          fontWeight: 700
      type: Badge
    colors: bg-light-fg-dark
    styles:
      self:
        flexDirection: col
        justifyContent: center
        alignItems: center
        margin:
          - mt-0
        padding:
          - pt-14
          - pb-14
          - pl-14
          - pr-14
      subtitle:
        textAlign: center
        fontWeight: 500
        fontStyle: italic
    type: GenericSection
  - type: CarouselSection
    title: null
    subtitle: OUR VISION AND MISSION
    items:
      - title: OUR MISSION
        tagline: ''
        subtitle: ''
        text: >+
          To build and amplify solutions and project strategies that efficiently
          function to ensure simultaneous benefit to the environment, the
          innovative and fiscal stand-point of the business involved and the
          people.

        image:
          altText: Maria Walters
          styles:
            self:
              borderRadius: full
          type: ImageBlock
        actions: []
        colors: bg-neutral-fg-dark
        styles:
          self:
            padding:
              - pt-9
              - pb-9
              - pl-9
              - pr-9
            textAlign: center
            borderRadius: large
            flexDirection: row
            justifyContent: center
        type: FeaturedItem
      - title: OUR VISION
        tagline: ''
        subtitle: ''
        text: >+
          To achieve a continent with thriving ecosystems; where development
          leverages innovation that is geared towards enhancing the quality of
          life of the African people, their environment and, their economic
          standing.

        image:
          altText: John Doe
          styles:
            self:
              borderRadius: full
          type: ImageBlock
        actions: []
        colors: bg-neutral-fg-dark
        styles:
          self:
            padding:
              - pt-9
              - pb-9
              - pl-9
              - pr-9
            textAlign: center
            borderRadius: large
            flexDirection: row
            justifyContent: center
        type: FeaturedItem
    elementId: null
    variant: next-prev-nav
    colors: bg-light-fg-dark
    styles:
      self:
        justifyContent: center
        margin:
          - mt-1
          - mb-1
        padding:
          - pt-10
          - pb-10
          - pl-10
          - pr-10
      subtitle:
        textAlign: center
  - title:
      text: Get in Touch
      color: text-dark
      type: TitleBlock
    subtitle: ''
    text: ''
    media:
      fields:
        - name: name
          label: Name
          hideLabel: true
          placeholder: Your name
          isRequired: true
          width: full
          type: TextFormControl
        - name: email
          label: Email
          hideLabel: true
          placeholder: Your email
          isRequired: true
          width: full
          type: EmailFormControl
        - name: message
          label: Message
          hideLabel: true
          placeholder: Your message
          width: full
          type: TextareaFormControl
      elementId: contact-form
      styles:
        self:
          padding:
            - pt-6
            - pb-6
            - pl-6
            - pr-6
          borderColor: border-dark
          borderStyle: solid
          borderWidth: 1
          borderRadius: large
      type: FormBlock
      submitButton:
        type: SubmitButtonFormControl
        label: Submit
        showIcon: true
        icon: arrowRight
        iconPosition: right
        style: primary
        elementId: null
    badge:
      label: ''
      color: text-primary
      type: Badge
    colors: bg-light-fg-dark
    type: GenericSection
    styles:
      self:
        flexDirection: col
        justifyContent: center
        alignItems: flex-start
        padding:
          - pt-11
          - pb-11
          - pl-11
          - pr-11
seo:
  metaTitle: Home
  metaDescription: This demo site is built with Netlify Create.
  socialImage: /images/main-hero.jpg
  type: Seo
  isDraft: false
---
