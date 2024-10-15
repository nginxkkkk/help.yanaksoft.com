<?php
global $porto_settings, $porto_layout;
?>
<header id="ys-header">
  <div class="container">
    <div class="left">
      <?php echo porto_logo(); ?>
    </div>
    <div id="main-menu">
      <?php
      echo porto_main_menu();
      ?>
    </div> 

    <div class="header-right">
      <?php
        $contact_info = $porto_settings['header-contact-info'];
        if ($contact_info) {
          echo '<div class="header-contact">' . do_shortcode($contact_info) . '</div>';
        }
        echo porto_search_form();
        ?>
      <a class="mobile-toggle"><i class="fa fa-reorder"></i></a>
    </div> 
  </div>
  <?php
    get_template_part('header/mobile_menu');
  ?>
</header>