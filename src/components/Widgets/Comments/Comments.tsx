import { useEffect } from "react";
import { DISQUS_URL } from "../../../utilities/config";

interface CommentsProps {
	PAGE_URL: string;
	PAGE_IDENTIFIER: string;
}
export const Comments = ({ PAGE_URL, PAGE_IDENTIFIER }: CommentsProps ) => {
	  useEffect(() => {
	    const script = document.createElement('script');
	    script.innerHTML = `
	      const PAGE_URL = "${PAGE_URL}";
	      const PAGE_IDENTIFIER = "${PAGE_IDENTIFIER}";
	      
	      let disqus_config = function () {
	        this.page.url = PAGE_URL;
	        this.page.identifier = PAGE_IDENTIFIER;
	      };
	      
	      (function() {
	        var d = document, s = d.createElement('script');
	        s.src = '${DISQUS_URL}';
	        s.setAttribute('data-timestamp', +new Date());
	        (d.head || d.body).appendChild(s);
	      })();
	    `;
	    document.head.appendChild(script);

	    return () => {
	      document.head.removeChild(script);
	    };
	  }, []);

	return (
		<div className="comment-section">
		    <div id="disqus_thread"></div>
			<noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>
		</div>
	) 
}


