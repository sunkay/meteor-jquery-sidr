Package.describe({
	summary: "Sidr jquery plugin to create facebook style sliding menus repackaged for Meteor"
});

Package.on_use(function (api) {
	api.use('jquery', 'client'); 
	api.add_files('lib/sidr/jquery.sidr.js', 'client');
	api.add_files('lib/sidr/stylesheets/jquery.sidr.light.css', 'client');
	api.add_files('lib/sidr/stylesheets/jquery.sidr.dark.css', 'client');
});
