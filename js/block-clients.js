registerBlockType( 'childress/clients', {
    title: 'Clients',
    icon: 'groups',
    category: 'custom-blocks',

    attributes: {
        
    },

    edit( { attributes, className, setAttributes } ) {
        return (
            <section className={ className + ' clients' }>
                <InnerBlocks
                    allowedBlocks={['childress/client']}
                    template={[
                        ['childress/client'],
                        ['childress/client'],
                        ['childress/client'],
                        ['childress/client'],
                        ['childress/client']
                    ]}
                />
            </section>
        );
    },

    save( { attributes } ) {
        return (
            <section className='clients container'>
                <InnerBlocks.Content />
            </section>
        );
    },
} );


registerBlockType( 'childress/client', {
    title: 'Client',
    icon: 'businessman',
    category: 'custom-blocks',
    parent: false,

    attributes: {
        imageUrl: {
            type: 'string'
        },
        imageAlt: {
            type: 'string'
        },
        imageId: {
            type: 'number'
        },
        name: {
            type: 'string'
        }
    },

    edit( { attributes, className, setAttributes } ) {
        const { imageUrl, imageAlt, imageId, name } = attributes;

        return (
            <div className={ className + ' client' }>
                <PlainText
                    value={ name }
                    onChange={ ( value ) => { setAttributes({ name: value }) } }
                    placeholder='Client Name'
                />
                <MediaUpload
                    label='Image'
                    onSelect={ media => { setAttributes( { imageUrl: media.url, imageAlt: media.alt, imageId: media.id } ) } }
                    type='image'
                    value={ imageUrl }
                    render={ ({ open }) => (
                        <Button className={ imageId ? 'image-button' : 'button button-large' } onClick={ open }>
                            { imageId ? <img src={ imageUrl } /> : 'Select Image' }
                        </Button>
                    ) }
                />
            </div>
        );
    },

    save( { attributes } ) {
        const { imageUrl, imageAlt, imageId, name } = attributes;

        return (
            <div className='client'>
                <p className='client__name'>{ name }</p>
                <img src={ imageUrl } alt={ imageAlt } className={ 'client__img wp-image-' + imageId } />
            </div>
        );
    },
} );
