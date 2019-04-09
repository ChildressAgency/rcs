registerBlockType( 'childress/contact-tabs', {
    title: 'Contact Tabs',
    icon: 'email',
    category: 'custom-blocks',

    attributes: {
        tabTitle1: {
            type: 'string'
        },
        tabShortcode1: {
            type: 'string'
        },
        tabTitle2: {
            type: 'string'
        },
        tabShortcode2: {
            type: 'string'
        },
        tabTitle3: {
            type: 'string'
        },
        tabShortcode3: {
            type: 'string'
        },
    },

    edit( { attributes, className, setAttributes } ) {
        const { tabTitle1, tabShortcode1, tabTitle2, tabShortcode2, tabTitle3, tabShortcode3 } = attributes;

        return (
            <section className={ className + ' contact-tabs' }>
                <PlainText
                    value={ tabTitle1 }
                    onChange={ ( value ) => { setAttributes({ tabTitle1: value }) } }
                    placeholder='Tab 1 Title'
                />
                <PlainText
                    value={ tabShortcode1 }
                    onChange={ ( value ) => { setAttributes({ tabShortcode1: value }) } }
                    placeholder='Tab 1 Shortcode'
                />
                <PlainText
                    value={ tabTitle2 }
                    onChange={ ( value ) => { setAttributes({ tabTitle2: value }) } }
                    placeholder='Tab 2 Title'
                />
                <PlainText
                    value={ tabShortcode2 }
                    onChange={ ( value ) => { setAttributes({ tabShortcode2: value }) } }
                    placeholder='Tab 2 Shortcode'
                />
                <PlainText
                    value={ tabTitle3 }
                    onChange={ ( value ) => { setAttributes({ tabTitle3: value }) } }
                    placeholder='Tab 3 Title'
                />
                <PlainText
                    value={ tabShortcode3 }
                    onChange={ ( value ) => { setAttributes({ tabShortcode3: value }) } }
                    placeholder='Tab 3 Shortcode'
                />
            </section>
        );
    },

    save( { attributes } ) {
        const { tabTitle1, tabShortcode1, tabTitle2, tabShortcode2, tabTitle3, tabShortcode3 } = attributes;

        return null;
    },
} );

