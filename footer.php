
        <footer class="footer">
            <section class="footer__brand">
                <img src="<?php echo get_option( 'footer-logo' ); ?>" />
                <h3><span class="footer__brand-capital">R</span>ESEARCH <span class="footer__brand-capital">C</span>ONTROL <span class="footer__brand-capital">S</span>OLUTIONS</h3>
            </section>
            <section class="footer__content">
                <div class="footer__contact">
                    <h4 class="footer__heading">CONTACT US</h4>
                    <?php echo get_option( 'footer-contact' ); ?>
                </div>
                <div class="footer__address">
                    <h4 class="footer__heading">VISIT US</h4>
                    <p><?php echo get_option( 'address' ); ?></p>
                    <p><?php echo get_option( 'city-state-zip' ); ?></p>
                </div>
                <div class="footer__about">
                    <h4 class="footer__heading">ABOUT US</h4>
                    <div class="footer__slider">
                        <?php
                        $args = array(
                            'posts_per_page'    => -1,
                            'post_type'         => 'about_slide',
                            'orderby'           => 'date',
                            'order'             => 'ASC',
                        );

                        $query = new WP_Query( $args );

                        if( $query->have_posts() ){
                            while( $query->have_posts() ){
                                $query->the_post();

                                echo '<p><strong>' . get_the_title() . '</strong></p>';
                                echo '<p>' . get_the_content() . '</p>';
                            }
                        }
                        ?>
                    </div>
                </div>
            </section>
        </footer>

    </div>
    
    <?php wp_footer(); ?>
</body>
</html>