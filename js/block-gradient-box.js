registerBlockType( 'childress/gradient-box', {
    title: 'Gradient Box',
    icon: createElement('svg', 
        { 
            width: 512,
            height: 512,
            viewBox: '0 0 512 512'
        },
        createElement( 'path',
            {
                d: 'M501.333,0H362h-21.333h-95.333H224h-74.667H128H85.333H64H10.667C4.776,0,0,4.776,0,10.667v490.667 C0,507.224,4.776,512,10.667,512H64h21.333H128h21.333H224h21.333h95.333H362h139.333c5.891,0,10.667-4.776,10.667-10.667V10.667 C512,4.776,507.224,0,501.333,0z M64,490.667H21.333V21.333H64V490.667z M128,490.667H85.333V21.333H128V490.667z M224,490.667 h-74.667V21.333H224V490.667z M340.667,490.667h-95.333V21.333h95.333V490.667z M490.667,490.667H362V21.333h128.667V490.667z'
            }
        ),
    ),
    category: 'custom-blocks',

    attributes: {
        classes: {
            type: 'string',
            default: 'gradient-box--top'
        },
        title: {
            type: 'string'
        },
        text: {
            type: 'string'
        },
        buttonText: {
            type: 'string'
        },
        link: {
            type: 'string'
        }
    },

    edit( { attributes, className, setAttributes } ) {
        const { classes, title, text, buttonText, link } = attributes;

        return (
            <Fragment>
                <InspectorControls>
                    <PanelBody
                        title="Variant">
                        <SelectControl
                            label="Top or Bottom"
                            value={ classes ? classes : '' }
                            options={[
                                {
                                    label: 'Top',
                                    value: 'gradient-box--top'
                                },
                                {
                                    label: 'Bottom',
                                    value: 'gradient-box--bottom'
                                },
                            ]}
                            onChange={ ( value ) => setAttributes({ classes: value }) }
                        />
                    </PanelBody>
                </InspectorControls>
                <div className={ className + ' gradient-box' + classes }>
                    <h2>
                        <PlainText
                            value={ title }
                            onChange={ ( value ) => { setAttributes({ title: value }) } }
                            placeholder='Title'
                        />
                    </h2>
                    <p>
                        <RichText
                            value={ text }
                            onChange={ ( value ) => { setAttributes({ text: value }) } }
                            placeholder='Text'
                        />
                    </p>
                    <URLInputButton
                        url={ link }
                        onChange={ ( value ) => { setAttributes({ link: value }) } }
                    />
                    <p>
                        <PlainText
                            value={ buttonText }
                            onChange={ ( value ) => { setAttributes({ buttonText: value }) } }
                            placeholder='Button Text'
                        />
                    </p>
                </div>
            </Fragment>
        );
    },

    save( { attributes } ) {
        const { classes, title, text, buttonText, link } = attributes;

        const gradientTop = '/wp-content/uploads/2019/03/RCS_Website_TopPiece.svg';
        const gradientBottom = '/wp-content/uploads/2019/03/RCS_Website_BottomPiece.svg';
        var path = '';
        var height = '';

        if( typeof window !== undefined ){
            path = location.protocol + '//' + location.host;
        }

        // TODO: Remove this in prod
        if( location.host == 'dev.childressagency.com' )
            path += '/rcs'

        if( classes == 'gradient-box--top' ){
            path += gradientTop;
            height = '600px'
        }
        else{
            path += gradientBottom;
            height = '700px'
        }

        return (
            <div className={ 'gradient-box ' + classes } style={{ backgroundImage: `url("${ path }")`, height: height }}>
                <div className="gradient-box__globe"></div>
                <div className='gradient-box__content'>
                    <h2 className='gradient-box__title'>{ title }</h2>
                    <p className='gradient-box__text'><RichText.Content value={ text } /></p>
                    <a className='btn' href={ link }>{ buttonText }</a>
                </div>
            </div>
        );
    },
} );