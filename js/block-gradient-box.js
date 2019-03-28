registerBlockType( 'childress/gradient-box', {
    title: 'Gradient Box',
    icon: 'editor-contract',
    category: 'layout',

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
                <div className='gradient-box__content'>
                    <h2 className='gradient-box__title'>{ title }</h2>
                    <p className='gradient-box__text'><RichText.Content value={ text } /></p>
                    <a className='btn' href={ link }>{ buttonText }</a>
                </div>
            </div>
        );
    },
} );