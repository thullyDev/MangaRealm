function adblockDetector() {
	setTimeout(() => {
		if (detectAdBlock()) {
			  const redirectUrl = new URL("/alert", window.location.origin)
			  const message = encodeURIComponent("Adblock Detected")
			  const description = encodeURIComponent("please turn off any adblock you may have on for this site...")
			  redirectUrl.searchParams.set("message", message)
			  redirectUrl.searchParams.set("description", description)
			  
			  if(isNaN(start) || isNaN(end) || end - start > allow) window.location.replace(redirectUrl.toString())
		}
	}, 1000)

}

function detectAdBlock() {
    const adContainer = document.createElement('div');
    adContainer.innerHTML = '&nbsp;';
    adContainer.className = 'adbox';
    adContainer.style.width = '1px';
    adContainer.style.height = '1px';
    adContainer.style.position = 'absolute';
    adContainer.style.left = '-9999px';
    adContainer.style.top = '-9999px';
    document.body.appendChild(adContainer);

    if (adContainer.clientHeight === 0) {
        console.log('Adblock detected');
        return true;
    }

    document.body.removeChild(adContainer);
    return false;
}