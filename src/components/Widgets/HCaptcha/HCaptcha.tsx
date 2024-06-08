export const HCaptcha = ({ captchaId }: { captchaId: string }) => {
	return (
		<div className="captcha-con">
			<div id={`captcha-${captchaId}`} className="captcha-widgets"></div>
		</div>
	)
}