registerBlockType( 'childress/capabilities', {
    title: 'Capabilities',
    icon: createElement('svg', 
        { 
            width: 433.5,
            height: 433.5,
            viewBox: '0 0 433.5 433.5'
        },
        createElement( 'path',
            {
                d: 'M153,382.5h127.5V51H153V382.5z M0,382.5h127.5V51H0V382.5z M306,51v331.5h127.5V51H306z'
            }
        ),
    ),
    category: 'custom-blocks',

    attributes: {
        title: {
            type: 'string'
        },
        subtitle: {
            type: 'string'
        },
    },

    edit( { attributes, className, setAttributes } ) {
        const { title, subtitle } = attributes;

        return (
            <section className={ className + ' capabilities' }>
                <h2 className='capabilities__title'>
                    <PlainText
                        value={ title }
                        onChange={ ( value ) => { setAttributes({ title: value }) } }
                        placeholder='Title'
                    />
                </h2>
                <h3 className='capabilities__subtitle'>
                    <PlainText
                        value={ subtitle }
                        onChange={ ( value ) => { setAttributes({ subtitle: value }) } }
                        placeholder='Subtitle'
                    />
                </h3>
                <InnerBlocks
                    allowedBlocks={['childress/capabilities-column']}
                    template={[
                        ['childress/capabilities-column'],
                        ['childress/capabilities-column'],
                        ['childress/capabilities-column']
                    ]}
                    templateLock='all'
                />
            </section>
        );
    },

    save( { attributes } ) {
        const { title, subtitle } = attributes;

        return (
            <section className='capabilities container'>
                <div className='capabilities__heading'>
                    <h2 className='capabilities__title'>{ title }</h2>
                    <h3 className='capabilities__subtitle'>{ subtitle }</h3>
                </div>
                <div className='capabilities__columns'>
                    <InnerBlocks.Content />
                </div>
            </section>
        );
    },
} );

registerBlockType( 'childress/capabilities-column', {
    title: 'Column',
    icon: createElement('svg', 
        { 
            width: 433.5,
            height: 433.5,
            viewBox: '0 0 433.5 433.5'
        },
        createElement( 'path',
            {
                d: 'M153,382.5h127.5V51H153V382.5z M0,382.5h127.5V51H0V382.5z M306,51v331.5h127.5V51H306z'
            }
        ),
    ),
    category: 'custom-blocks',
    parent: false,

    attributes: {
        iconUrl: {
            type: 'string'
        },
        iconAlt: {
            type: 'string'
        },
        iconId: {
            type: 'number'
        },
        iconHoverUrl: {
            type: 'string'
        },
        iconHoverAlt: {
            type: 'string'
        },
        iconHoverId: {
            type: 'number'
        },
        title: {
            type: 'string'
        }
    },

    edit( { attributes, className, setAttributes } ) {
        const { iconUrl, iconAlt, iconId, iconHoverUrl, iconHoverAlt, iconHoverId, title } = attributes;

        return (
            <div className={ className + ' capabilities__column' }>
                <MediaUpload
                    label='Icon'
                    onSelect={ media => { setAttributes( { iconUrl: media.url, iconAlt: media.alt, iconId: media.id } ) } }
                    type='image'
                    value={ iconUrl }
                    render={ ({ open }) => (
                        <Button className={ iconId ? 'image-button' : 'button button-large' } onClick={ open }>
                            { iconId ? <img src={ iconUrl } /> : 'Select Icon' }
                        </Button>
                    ) }
                />
                <MediaUpload
                    label='Icon'
                    onSelect={ media => { setAttributes( { iconHoverUrl: media.url, iconHoverAlt: media.alt, iconHoverId: media.id } ) } }
                    type='image'
                    value={ iconHoverUrl }
                    render={ ({ open }) => (
                        <Button className={ iconHoverId ? 'image-button' : 'button button-large' } onClick={ open }>
                            { iconHoverId ? <img src={ iconHoverUrl } /> : 'Select Hover Icon' }
                        </Button>
                    ) }
                />
                <h4>
                    <PlainText
                        value={ title }
                        onChange={ ( value ) => { setAttributes({ title: value }) } }
                        placeholder='Column Title'
                    />
                </h4>
                <InnerBlocks
                    template={[
                        ['core/paragraph']
                    ]}
                    templateLock={ false }
                />
            </div>
        );
    },

    save( { attributes } ) {
        const { iconUrl, iconAlt, iconId, iconHoverUrl, iconHoverAlt, iconHoverId, title } = attributes;

        return (
            <div className='capabilities__column'>
                <div className='capabilities__icon'>
                    <img src={ iconHoverUrl } alt={ iconHoverAlt } className={ 'wp-image-' + iconHoverId } />
                    <canvas id='soup' className='capabilities__icon-hover-bg'></canvas>
                    <img src={ iconUrl } alt={ iconAlt } className={ 'wp-image-' + iconId } />
                </div>
                <h4 className='capabilities__column-title'>{ title }</h4>
                <InnerBlocks.Content />
            </div>
        );
    },
} );
