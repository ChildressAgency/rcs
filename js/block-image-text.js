registerBlockType( 'childress/image-text', {
    title: 'Image & Text',
    icon: createElement('svg', 
        { 
            width: 24,
            height: 24,
            viewBox: '0 0 24 24'
        },
        createElement( 'path',
            {
                d: 'M13 17h8v-2h-8v2zM3 19h8V5H3v14zM13 9h8V7h-8v2zm0 4h8v-2h-8v2z'
            }
        ),
    ),
    category: 'custom-blocks',

    attributes: {
        isLeft: {
            type: 'boolean',
            default: 'true'
        },
        backgroundColor: {
            type: 'string',
            default: '#6ea34f'
        },
        textColor: {
            type: 'string',
            default: '#ffffff'
        },
        imageUrl: {
            type: 'string'
        },
        imageAlt: {
            type: 'string'
        },
        imageId: {
            type: 'number'
        },
    },

    edit( { attributes, className, setAttributes } ) {
        const { isLeft, backgroundColor, textColor, imageUrl, imageAlt, imageId } = attributes;

        function setBackgroundColor( ...args ){
            setAttributes({ backgroundColor: args[0] });
        }

        function setTextColor( ...args ){
            setAttributes({ textColor: args[0] });
        }

        return (
            <Fragment>
                <InspectorControls>
                    <PanelBody>
                        <ToggleControl
                            label="Alignment"
                            help={ isLeft ? 'Left' : 'Right' }
                            checked={ isLeft }
                            onChange={ ( value ) => { setAttributes({ isLeft: value }) } }
                        />
                    </PanelBody>
                    <PanelColorSettings
                        title="Color Settings"
                        colorSettings={[
                            {
                                value: backgroundColor,
                                onChange: setBackgroundColor,
                                label: 'Background Color'
                            },
                            {
                                value: textColor,
                                onChange: setTextColor,
                                label: 'Text Color'
                            }
                        ]}
                    />
                </InspectorControls>
                <section className={ className + ' image-text ' + ( isLeft ? 'image-text--left' : 'image-text--right' ) } style={{ backgroundColor: backgroundColor, color: textColor }}>
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
                    <InnerBlocks
                        template={[
                            ['core/paragraph']
                        ]}
                    />
                </section>
            </Fragment>
        );
    },

    save( { attributes } ) {
        const { isLeft, backgroundColor, textColor, imageUrl, imageAlt, imageId } = attributes;

        return (
            <section className={ 'image-text ' + ( isLeft ? 'image-text--left' : 'image-text--right' )} style={{ backgroundColor: backgroundColor, color: textColor }}>
                <div className='image-text__img'>
                    <img src={ imageUrl } alt={ imageAlt } className={ 'wp-image-' + imageId }/>
                </div>
                <div className='image-text__content'>
                    <InnerBlocks.Content />
                </div>
            </section>
        );
    },
} );
