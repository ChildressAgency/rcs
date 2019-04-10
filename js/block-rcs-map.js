registerBlockType( 'childress/rcs-map', {
    title: 'Map',
    icon: 'format-image',
    category: 'custom-blocks',

    attributes: {
        
    },

    edit( { attributes, className, setAttributes } ) {
        return (
            <ServerSideRender
                block='childress/rcs-map'
            />
        );
    },

    save( { attributes } ) {
        return null;
    },
} );
