registerBlockType( 'childress/globe', {
    title: 'Globe',
    icon: 'editor-contract',
    category: 'custom-blocks',

    attributes: {

    },

    edit( { attributes, className, setAttributes } ) {
        return (
            <p>Globe</p>
        );
    },

    save( { attributes } ) {
        return (
            <div className='globe'></div>
        );
    },
} );