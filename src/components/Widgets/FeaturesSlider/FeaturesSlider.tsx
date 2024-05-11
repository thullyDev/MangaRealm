import { getFeatures } from "../../../services/Manganato/manganato"
import { useState, useEffect } from 'react';
import type { Manga } from "../../../services/Manganato/manganatoTypes";

export const FeaturesSlider = () => {
  const [features, setFeatures] = useState<Manga[]>([]);

  useEffect(() => {
  	const fetchData = async () => {
  		const data = await getFeatures()
  		setFeatures(data);
   	};
   	fetchData();
   }, []); 

	console.log({ features })


	return (
		<div className="features-slider">
			{features ? 
				(
					<div className="bg-red-500"> its here!!! </div> 
				): 
				(
					<div className="bg-red-100">Loading...</div> 
				)
		}
		</div>
	)
}



// function MyComponent() {
//   return (
//     <div>
//       {componentLoaded ? (
//         <div>
//           {/* Render your component here */}
//         </div>
//       ) : (
//         <div>Loading...</div>
//       )}
//     </div>
//   );
// }

// export default MyComponent;
