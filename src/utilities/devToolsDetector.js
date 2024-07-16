function detect_dev_tool(allow) {
  if(isNaN(+allow)) allow = 100;
  const start = +new Date(); // Validation of built-in Object tamper prevention.
  debugger;
  const end = +new Date(); // Validates too.

  const redirectUrl = new URL("/alert", window.location.origin)
  const message = encodeURIComponent("Dev Tools Detected")
  const description = encodeURIComponent("Please dont open dev tools...")
  redirectUrl.searchParams.set("message", message)
  redirectUrl.searchParams.set("description", description)
  
  if(isNaN(start) || isNaN(end) || end - start > allow) window.location.replace(redirectUrl.toString())
}

function activateDevToolsDetector() {
  if(window.attachEvent) {
    if (document.readyState === "complete" || document.readyState === "interactive") {
        detect_dev_tool();
      window.attachEvent('onresize', detect_dev_tool);
      window.attachEvent('onmousemove', detect_dev_tool);
      window.attachEvent('onfocus', detect_dev_tool);
      window.attachEvent('onblur', detect_dev_tool);
    } else {
        setTimeout(argument.callee, 0);
    }
  } else {
    window.addEventListener('load', detect_dev_tool);
    window.addEventListener('resize', detect_dev_tool);
    window.addEventListener('mousemove', detect_dev_tool);
    window.addEventListener('focus', detect_dev_tool);
    window.addEventListener('blur', detect_dev_tool);
  }
}
