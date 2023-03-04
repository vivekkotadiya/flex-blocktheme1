<?php
function smt_popup_setting()
{
    register_setting('smt_popup_setting', 'popup_sm_heading');
    register_setting('smt_popup_setting', 'popup_heading');
    register_setting('smt_popup_setting', 'popup_email');
    register_setting('smt_popup_setting', 'popup_phone');
    register_setting('smt_popup_setting', 'popup_contact_description');
    register_setting('smt_popup_setting', 'popup_image');
    register_setting('smt_popup_setting', 'popup_applicant_text');
    register_setting('smt_popup_setting', 'popup_applicant_btn_link');
    register_setting('smt_popup_setting', 'popup_company_text');
    register_setting('smt_popup_setting', 'popup_company_btn_link');
    register_setting('smt_popup_setting', 'popup_activate');
}
add_action('admin_init', 'smt_popup_setting');

/**
 * Registers a new options page under Themes.
 */

add_action('admin_menu', 'popup_setting_page_menu');

function popup_setting_page_menu()
{
    add_theme_page(
        __('Popup Setting', 'smt-theme'),
        __('Popup', 'smt-theme'),
        'manage_options',
        'smt-popup',
        'smt_popup_callback'
    );
}

/**
 * Settings page display callback.
 */
function smt_popup_callback()
{ ?>
    <style>
        .popupdata .postbox {
            width: 1024px;
            max-width: 100%;
        }

        #postbox-container-2 .wp-meta-fields-row td {
            border-right: 1px solid #f0f0f0;
            border-bottom: 1px solid #f0f0f0;
        }

        #postbox-container-2 .wp-meta-fields-heading {
            background: #f9f9f9;
            border-right: 1px solid #e1e1e1;
            padding: 13px 15px;
            width: 25%;
            color: #333;
            font-weight: bold;
        }

        #postbox-container-2 .wp-meta-fields-content {
            padding: 13px 15px;
            position: relative;
        }

        #postbox-container-2 .wp-meta-fields-table input[type="text"],
        #postbox-container-2 .wp-meta-fields-table input[type="email"] {
            width: calc(100% - 40px);
        }

        .image--preview img {
            width: 150px;
            height: 150px;
            object-fit: cover;
            margin-bottom: 10px !important;
        }
    </style>
    <h2>Popup Settings</h2>
    <div id="poststuff" class="popupdata">
        <div id="postbox-container-2" class="postbox-container">
            <div id="jobs-meta-box" class="postbox ">
                <div class="postbox-header">
                    <h2 class="hndle ui-sortable-handle">Popup Details</h2>
                </div>
                <div class="inside">
                    <form method="post" action="options.php" enctype="multipart/form-data">
                        <?php settings_fields('smt_popup_setting'); ?>
                        <table class="widefat wp-meta-fields-table">
                            <tr class="wp-meta-fields-row">
                                <td class="wp-meta-fields-heading"><label for="popup_sm_heading">Small Heading</label></td>
                                <td class="wp-meta-fields-content"><input type="text" id="popup_sm_heading" name="popup_sm_heading" value="<?php echo get_option('popup_sm_heading'); ?>" /></td>
                            </tr>
                            <tr class="wp-meta-fields-row">
                                <td class="wp-meta-fields-heading"><label for="popup_heading">Heading</label></td>
                                <td class="wp-meta-fields-content"><input type="text" id="popup_heading" name="popup_heading" value="<?php echo get_option('popup_heading'); ?>" /></td>
                            </tr>
                            <tr class="wp-meta-fields-row">
                                <td class="wp-meta-fields-heading"><label for="popup_email">Email Address</label></td>
                                <td class="wp-meta-fields-content"><input type="email" id="popup_email" name="popup_email" value="<?php echo get_option('popup_email'); ?>" /></td>
                            </tr>
                            <tr class="wp-meta-fields-row">
                                <td class="wp-meta-fields-heading"><label for="popup_phone">Phone Number</label></td>
                                <td class="wp-meta-fields-content"><input type="text" id="popup_phone" name="popup_phone" value="<?php echo get_option('popup_phone'); ?>" /></td>
                            </tr>
                            <tr class="wp-meta-fields-row">
                                <td class="wp-meta-fields-heading"><label for="popup_contact_description">Contact Description</label></td>
                                <td class="wp-meta-fields-content"><input type="text" id="popup_contact_description" name="popup_contact_description" value="<?php echo get_option('popup_contact_description'); ?>" /></td>
                            </tr>
                            <tr class="wp-meta-fields-row">
                                <td class="wp-meta-fields-heading"><label for="popup_image">Image</label></td>
                                <td class="wp-meta-fields-content">
                                    <input type="hidden" id="popup_image" name="popup_image" value="<?php echo get_option('popup_image'); ?>">
                                    <?php if ('' !== get_option('popup_image')) : ?>
                                        <div class="image--preview" id="image--preview"><?php echo wp_get_attachment_image(get_option('popup_image'), 'full'); ?></div>
                                    <?php else : ?>
                                        <div class="image--preview" id="image--preview"></div>
                                    <?php endif; ?>
                                    <input type="button" class="button button-secondary popup_image_button" id="popup_image_button" name="popup_image_button" value="Add Image">
                                    <input type="button" class="button button-secondary popup_image_remove" id="popup_image_remove" name="popup_image_remove" value="Remove Image">
                                </td>
                            </tr>
                            <tr class="wp-meta-fields-row">
                                <td class="wp-meta-fields-heading"><label for="popup_applicant_text">Application Button Text</label></td>
                                <td class="wp-meta-fields-content"><input type="text" id="popup_applicant_text" name="popup_applicant_text" value="<?php echo get_option('popup_applicant_text'); ?>" /></td>
                            </tr>
                            <tr class="wp-meta-fields-row">
                                <td class="wp-meta-fields-heading"><label for="popup_applicant_btn_link">Application Button Link</label></td>
                                <td class="wp-meta-fields-content"><input type="text" id="popup_applicant_btn_link" name="popup_applicant_btn_link" value="<?php echo get_option('popup_applicant_btn_link'); ?>" /></td>
                            </tr>
                            <tr class="wp-meta-fields-row">
                                <td class="wp-meta-fields-heading"><label for="popup_company_text">Company Button Text</label></td>
                                <td class="wp-meta-fields-content"><input type="text" id="popup_company_text" name="popup_company_text" value="<?php echo get_option('popup_company_text'); ?>" /></td>
                            </tr>
                            <tr class="wp-meta-fields-row">
                                <td class="wp-meta-fields-heading"><label for="popup_company_btn_link">Company Button Link</label></td>
                                <td class="wp-meta-fields-content"><input type="text" id="popup_company_btn_link" name="popup_company_btn_link" value="<?php echo get_option('popup_company_btn_link'); ?>" /></td>
                            </tr>
                            <tr class="wp-meta-fields-row">
                                <td class="wp-meta-fields-heading"><label for="popup_activate">Activate Popup On site</label></td>
                                <td class="wp-meta-fields-content"><input type="checkbox" id="popup_activate" name="popup_activate" value="1" <?php echo get_option('popup_activate') == 1 ? 'checked' : ''; ?> /></td>
                            </tr>
                            <tr class="wp-meta-fields-row">
                                <td class="wp-meta-fields-heading"></td>
                                <td class="wp-meta-fields-content"><?php submit_button(); ?></td>
                            </tr>
                        </table>

                    </form>
                </div>
            </div>
        </div>
    </div>
<?php }

add_action('admin_enqueue_scripts', 'load_media');
function load_media()
{
    wp_enqueue_media();
}

add_action('admin_footer', 'add_custom_script');
function add_custom_script()
{ ?>
    <script>
        if (document.querySelector(".popup_image_button") !== null) {
            document.querySelector(".popup_image_button").addEventListener("click", function(event) {
                event.preventDefault(); // prevent default link click and page refresh


                const imageId = '#' + this.getAttribute('id');

                const customUploader = wp.media({
                    title: 'Add Image', // modal window title
                    library: {
                        // uploadedTo : wp.media.view.settings.post.id, // attach to the current post?
                        type: 'image'
                    },
                    button: {
                        text: 'Use this image' // button label text
                    },
                    multiple: false
                }).on('select', function() { // it also has "open" and "close" events
                    const attachment = customUploader.state().get('selection').first().toJSON();
                    document.getElementById("popup_image").value = attachment.id;
                    var image_wrap = document.getElementById("image--preview");
                    image_wrap.innerHTML = '<img class="custom_media_file" src="" style="margin:0;padding:0;float:none;" />';
                    image_wrap.querySelector(".custom_media_file").setAttribute("src", attachment.url);
                    image_wrap.querySelector(".custom_media_file").style.display = "block";
                })

                customUploader.on('open', function() {

                    if (imageId) {
                        const selection = customUploader.state().get('selection')
                        attachment = wp.media.attachment(imageId);
                        attachment.fetch();
                        selection.add(attachment ? [attachment] : []);
                    }

                })

                customUploader.open()
            });
        }
        if (document.querySelector(".popup_image_remove") !== null) {
            document.querySelector(".popup_image_remove").addEventListener("click", function(event) {
                event.preventDefault();
                document.getElementById("popup_image").value = '';
                var image_wrap = document.getElementById("image--preview");
                image_wrap.querySelector("img").remove();
            });
        }
    </script>
    <?php
}

function smt_add_popup_in_all_page()
{
    $popup_activate = get_option('popup_activate');

    if ($popup_activate) {
        $popup_sm_heading = get_option('popup_sm_heading');
        $popup_heading = get_option('popup_heading');
        $popup_email = get_option('popup_email');
        $popup_phone = get_option('popup_phone');
        $popup_desc = get_option('popup_contact_description');
        $popup_applicant_text = get_option('popup_applicant_text');
        $popup_applicant_btn_link = get_option('popup_applicant_btn_link');
        $popup_company_text = get_option('popup_company_text');
        $popup_company_btn_link = get_option('popup_company_btn_link');
        $popup_image = get_option('popup_image');

        $popup_applicant_btn_link = $popup_applicant_btn_link ? $popup_applicant_btn_link : "#";
        $popup_company_btn_link = $popup_company_btn_link ? $popup_company_btn_link : "#";
    ?>
        <div id="popup__contact" class="popup popup--contact">
            <button class="popup__close"></button>

            <div class="popup__image">
                <?php echo wp_get_attachment_image($popup_image, 'full'); ?>
            </div>

            <div class="popup__details">
                <span class="popup__headline popup__headline--small"><?php echo $popup_sm_heading; ?></span>
                <span class="popup__headline popup__headline--big"><?php echo $popup_heading; ?></span>
                <a class="popup__email" href="mailto:<?php echo $popup_email; ?>"><?php echo $popup_email; ?></a>
                <a class="popup__phone" href="tel:<?php echo preg_replace('/\D+/', '', $popup_phone); ?>"><?php echo $popup_phone; ?></a>
                <span class="popup__text"><?php echo $popup_desc; ?></span>

            </div>

            <div class="popup__buttons">
                <a href="<?php echo $popup_applicant_btn_link; ?>" class="button--cta button--style-two button--width-xs-inline button--color-three"><span class="button--text"><?php echo $popup_applicant_text; ?></span></a>
                <a href="<?php echo $popup_company_btn_link; ?>" class="button--cta button--style-two button--width-xs-inline button--color-six"><span class="button--text"><?php echo $popup_company_text; ?></span></a>
            </div>
        </div>
<?php }
}
add_action('wp_footer', 'smt_add_popup_in_all_page');
