registerBlockType( 'childress/services-example', {
    title: 'Services Example',
    icon: 'email',
    category: 'custom-blocks',

    attributes: {
        imageUrl: {
            type: 'string'
        },
        imageId: {
            type: 'number'
        },
    },

    edit( { attributes, className, setAttributes } ) {
        const { imageUrl, imageId } = attributes;

        return (
            <section className={ className + ' services-example' }>
                <MediaUpload
                    label='Image'
                    onSelect={ media => { setAttributes( { imageUrl: media.url, imageId: media.id } ) } }
                    type='image'
                    value={ imageUrl }
                    render={ ({ open }) => (
                        <Button className={ imageId ? 'image-button' : 'button button-large' } onClick={ open }>
                            { imageId ? <img src={ imageUrl }/> : 'Select Background Image' }
                        </Button>
                    ) }
                />
                <InnerBlocks
                    allowedBlocks={['childress/services-example-item']}
                    template={[
                        ['childress/services-example-item'],
                        ['childress/services-example-item'],
                    ]}
                    templateLock='all'
                />
            </section>
        );
    },

    save( { attributes } ) {
        const { imageUrl, imageId } = attributes;

        return (
            <section className='services-example container'>
                <img src={ imageUrl } className={ 'wp-image-' + imageId }/>
                <InnerBlocks.Content />
            </section>
        );
    },
} );

registerBlockType( 'childress/services-example-item', {
    title: 'Services Example Item',
    icon: 'email',
    category: 'custom-blocks',
    parent: false,

    attributes: {
        text: {
            type: 'string'
        },
        imageUrl: {
            type: 'string'
        },
        imageId: {
            type: 'number'
        },
    },

    edit( { attributes, className, setAttributes } ) {
        const { text, imageUrl, imageId } = attributes;

        return (
            <div className={ className + ' services-example__item' } >
                <MediaUpload
                    label='Image'
                    onSelect={ media => { setAttributes( { imageUrl: media.url, imageId: media.id } ) } }
                    type='image'
                    value={ imageUrl }
                    render={ ({ open }) => (
                        <Button className={ imageId ? 'image-button' : 'button button-large' } onClick={ open }>
                            { imageId ? <img src={ imageUrl }/> : 'Select Image' }
                        </Button>
                    ) }
                />
                <PlainText
                    value={ text }
                    onChange={ ( value ) => { setAttributes({ text: value }) } }
                    placeholder='Text'
                />
            </div>
        );
    },

    save( { attributes } ) {
        const { text, imageUrl, imageId } = attributes;

        return (
            <div className='services-example__item'>
                <img src={ imageUrl } className={ 'wp-image-' + imageId }/>
                <p>{ text }</p>
            </div>
        );
    },
} );

