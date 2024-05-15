import { Watch } from 'react-loader-spinner';
import "./style.css";

export const LoadingPage = () => {
     return (
          <div className="loading-spinner">
               <Watch color="white" radius={48} width={250} height={250}></Watch>
          </div>
     )
}

export default LoadingPage;
