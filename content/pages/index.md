---
title: Home
slug: /
sections:
  - type: GenericSection
    title:
      text: A VISION OF A BETTER FUTURE.
      color: text-dark
      type: TitleBlock
    subtitle: ''
    text: >
      Glimpse a world where innovation not only shapes progress but becomes the
      cornerstone of a hermonious existence for both people and nature.
    actions: []
    media:
      url: /images/MtKilimanjaroElephant.jpg
      altText: Unblock your team boost your time to production preview
      elementId: ''
      type: ImageBlock
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
        justifyContent: center
  - type: GenericSection
    title:
      type: TitleBlock
      text: OVERVIEW
      color: text-dark
      styles:
        self:
          textAlign: left
    subtitle: ''
    text: >
      Ecothrive Africa is a Kenya-based enterprise specializing in the
      development and implementation of comprehensive sustainability strategies
      for the African ecosystem. Our innovative solutions are designed to
      deliver projects that simultaneously improve the environment, empower
      people, and strengthen the economy—captured in our E-PIE (Environment,
      People, Innovation, and Economy) framework.


      Our work spans multiple sectors, including corporations, governments, and
      non-profis; where we design and deliver projects aligned with
      sustainability for Africa. We believe the power of holistic data analytics
      to drive decision-making, ensuring that our sustainability solutions are
      both impactful and measurable.
    actions: []
    colors: bg-light-fg-dark
    styles:
      self:
        flexDirection: row
        justifyContent: center
      subtitle:
        textAlign: left
  - title: Divider
    colors: bg-light-fg-dark
    styles:
      self:
        padding:
          - pt-7
          - pl-7
          - pb-7
          - pr-7
    type: DividerSection
  - type: CarouselSection
    subtitle: Our Vision and Mission
    items:
      - type: FeaturedItem
        title: Our Vision
        tagline: ''
        subtitle: ''
        text: |
          To accelerate the sustainable development of Africa and her ecosystem.
        image:
          type: ImageBlock
          altText: Maria Walters
          styles:
            self:
              borderRadius: full
        actions: []
        colors: bg-neutral-fg-dark
        styles:
          self:
            padding:
              - pt-9
              - pb-9
              - pl-9
              - pr-9
            textAlign: left
            borderRadius: large
            flexDirection: row
            justifyContent: center
      - type: FeaturedItem
        title: Our Mission
        tagline: ''
        subtitle: ''
        text: >
          We strive to empower corporations, governments, and non-profits with
          sustainable strategies that align with their goals and create
          simultaneous positive impacts on the environment and society, and
          economic prosperity.
        image:
          type: ImageBlock
          altText: Jane Doe
          styles:
            self:
              borderRadius: full
        actions: []
        colors: bg-neutralAlt-fg-dark
        styles:
          self:
            padding:
              - pt-9
              - pb-9
              - pl-9
              - pr-9
            textAlign: left
            borderRadius: large
            flexDirection: row
            justifyContent: center
    variant: next-prev-nav
    colors: bg-light-fg-dark
    styles:
      self:
        justifyContent: center
      subtitle:
        textAlign: center
  - type: GenericSection
    title:
      type: TitleBlock
      text: ''
      color: text-dark
    subtitle: ''
    text: >+
      Get in touch with Ecothrive Africa to learn more about our programs. We
      empower corporations, governments, and non-profits with sustainable
      strategies aligning with their goals.


      Contact us today.

    actions: []
    media:
      type: FormBlock
      fields:
        - type: TextFormControl
          name: name
          label: Name
          hideLabel: true
          placeholder: Your name
          isRequired: true
          width: full
        - type: EmailFormControl
          name: email
          label: Email
          hideLabel: true
          placeholder: Your email
          isRequired: true
          width: full
        - type: TextareaFormControl
          name: message
          label: Message
          hideLabel: true
          placeholder: Your message
          width: full
      submitButton:
        type: SubmitButtonFormControl
        label: Submit
        icon: arrowRight
        iconPosition: right
        style: primary
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
    badge:
      type: Badge
      label: Contact Us
      color: text-primary
    colors: bg-light-fg-dark
  - title: Divider
    colors: bg-light-fg-dark
    styles:
      self:
        padding:
          - pt-7
          - pl-7
          - pb-7
          - pr-7
    type: DividerSection
seo:
  metaTitle: 'Home '
  metaDescription: This demo site is built with Netlify Create.
  socialImage: /images/main-hero.jpg
  type: Seo
type: PageLayout
---
