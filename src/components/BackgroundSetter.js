import { useLocation } from "react-router-dom";
function BackgroundSetter({ children }) {
    const location = useLocation();
    // Determine the background based on the current path
    const getBackground = () => {
      let imageUrl;
      switch (location.pathname) {
        case "/about_the_reunion":
          imageUrl ="https://pitrewebpagestorage.blob.core.windows.net/$web/images/backgrounds/Create_a_rustic_background_image_capturing_the_ess_54c08a8e-f447-4603-9c85-bf57f6ee4c25_background_2.png";
          break;
        case "/schedule":
          imageUrl = "https://pitrewebpagestorage.blob.core.windows.net/$web/images/backgrounds/Create_a_rustic_background_image_capturing_the_ess_93dbaec9-7b56-4c63-b843-965014caf4de_background_4.png";
          break;
        case "/reunion_gallery":
          imageUrl = "https://pitrewebpagestorage.blob.core.windows.net/$web/images/backgrounds/Create_a_rustic_background_image_capturing_the_ess_b805e45e-a565-407d-9b2d-07c4471f031d_background_3.png";
          break;
        case "/book_references":
          imageUrl = "https://pitrewebpagestorage.blob.core.windows.net/$web/images/backgrounds/Create_a_rustic_background_image_capturing_the_ess_ee7bc3c1-25dc-417b-aa6f-c8ec2dd3ca81_background_1.png";
          break;
        default:
          imageUrl = "https://pitrewebpagestorage.blob.core.windows.net/$web/images/backgrounds/Create_a_rustic_background_image_capturing_the_ess_54c08a8e-f447-4603-9c85-bf57f6ee4c25_background_2.png";
          break;
      }
      return imageUrl;
    };
    return (
      <div 
      className="App" 
      style={{ 
        backgroundImage: `url(${getBackground()})`,
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }}
    >
        {children}
      </div>
    );
  }
  export default BackgroundSetter 