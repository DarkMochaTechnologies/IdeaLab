<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Experimental extends CI_Controller {

	/**
	 * Index Page for this controller.
	 *
	 * Maps to the following URL
	 * 		http://example.com/index.php/welcome
	 *	- or -
	 * 		http://example.com/index.php/welcome/index
	 *	- or -
	 * Since this controller is set as the default controller in
	 * config/routes.php, it's displayed at http://example.com/
	 *
	 * So any other public methods not prefixed with an underscore will
	 * map to /index.php/welcome/<method_name>
	 * @see http://codeigniter.com/user_guide/general/urls.html
	 */
    function __construct()
	{
		parent::__construct();
		$this->load->helper('url');
		$this->data['s_page_header'] = 'Experimental';
		$this->data['s_page_type'] = 'home';

		$this->data['a_js_scripts'] = array(
				base_url()	. 'assets/js/lib/jquery.onepage-scroll.min.js',
				base_url()	. 'assets/js/lib/slick.min.js',
				base_url()  . 'assets/js/experimental/home.js'
			);

		$this->data['a_css_sheets'] = array(
				base_url() . 'assets/css/lib/onepage-scroll.css',
				base_url() . 'assets/css/lib/slick.css',
				base_url() . 'assets/css/lib/slick-theme.css',
				base_url() . 'assets/css/experimental/home.css'
			);

	}
    
	public function index()
	{
		$this->data['s_main_content'] = 'experimental/home';
		$this->load->view('includes/template', $this->data);
	}

	public function scrollReveal()
	{
		$this->data['a_js_scripts'] = array(
			base_url()  . 'assets/js/lib/scrollReveal.min.js',
			base_url()  . 'assets/js/experimental/scrollReveal.js'
		);

		$this->data['a_css_sheets'] = array(
			base_url() . 'assets/css/experimental/scrollReveal.css'
		);


		
		$this->data['s_main_content'] = 'experimental/scrollReveal';
		$this->load->view('includes/template', $this->data);		
	}
    
}
