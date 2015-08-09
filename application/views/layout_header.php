<!DOCTYPE html>
<html>
    <head>
        <title>IdeaLab</title>
        
        <!-- Import materialize.css -->
        <link type="text/css" rel="stylesheet" href="assets/css/materialize/css/materialize.css" media="screen, projection"/>
        <link type="text/css" rel="stylesheet" href="assets/css/global.css"/>
        
        <?php
            if (isset($a_css_sheets)) {
                foreach($a_cs_scripts as $s_cs_script) {
                    echo "\t" . '<link rel="stylesheet" href="' . $s_cs_script .  '">' . "\r\n";
                }
            }
        ?>

        <script type="text/javascript" src="assets/js/jquery-2.1.4.js"></script>
        <script type="text/javascript" src="assets/js/materialize/js/materialize.js"></script>

        <?php
            if (isset($a_js_scripts)) {
                foreach ($a_js_initialize as $s_js) {
                    echo "\t" . '<script type="text/javascript" src="' . $s_js . '"></script>' . "\r\n";
                }
            }
        ?>
        <!-- Let browser know website is optimized for mobile -->
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        
    </head>
    <body>