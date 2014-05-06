Package.describe({
	summary: "Sidr jquery plugin to create facebook style sliding menus repackaged for Meteor"
});

Package.on_use(function (api) {
	api.use('jquery', 'client'); 
	api.add_files('lib/sidr/dist/jquery.sidr.js', 'client');
	api.add_files('lib/sidr/dist/stylesheets/jquery.sidr.light.css', 'client');
	api.add_files('lib/sidr/dist/stylesheets/jquery.sidr.dark.css', 'client');
});
