import {textcolornofound} from '../components/Styles'
import errorsvg from '../assets/404.svg'

export function PageNoFound() {

  return (
    <a  title='Go to home' href="https://dazzledeveloper.github.io/landing-search-deploy/"><div className="mt-[55px] flex justify-center items-center">
     
     <div>
     <h1 className={textcolornofound} >Hey hey little one, don't do that
</h1>
      <p className="text-white font-montserrat text-center mt-5" >Error finding page, Page not Found 404
</p>
    
    <span className="flex items-center justify-center">
    <img className="mt-5 h-[250px] w-[auto] " src={errorsvg} />
    </span>
     </div>
     
   

    
    </div></a>
    
  );
}
