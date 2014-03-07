var AppInstall = (function() {

  function guessManifestPath() {

    var loc = window.location;

    var pathname = window.location.pathname;

    if(pathname !== '/') {
      var parts = pathname.split('/');
      var lastPart = parts.pop();
      
      if(lastPart.indexOf('.') !== -1) {
        // the last part is not a directory, so we'll ignore it when guessing the path
        pathname = parts.join('/');
      }
    }

    if(pathname[pathname.length - 1] !== '/') {
      pathname += '/';
    }

    return loc.protocol + '//' + loc.host + pathname + 'manifest.webapp';

  }


  function isInstallable() {
    return(navigator.mozApps !== undefined);
  }


  function isInstalled(manifestPath, callback) {

    var request = navigator.mozApps.checkInstalled(manifestPath);

    request.onerror = function() {
      callback('Error checking for installed app: ' + request.error.name);
    };

    request.onsuccess = function() {
      // If the app is installed, you'll get a mozApp object in `request.result`,
      // else `request.result` is null
      callback(false, request.result !== null);
    };

  }


  function install(manifestPath, callback) {

    var installRequest = navigator.mozApps.install(manifestPath);

    installRequest.onsuccess = function() {
      // No error
      callback(false);
    };

    installRequest.onerror = function() {
      callback('Error installing the app: ' + installRequest.error.name);
    };

  }


  return {
    guessManifestPath: guessManifestPath,
    install: install,
    isInstalled: isInstalled,
    isInstallable: isInstallable
  };

}());
