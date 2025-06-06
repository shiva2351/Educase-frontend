
import { PageWrapper,Procard, Heading ,Image,Proheader,Procontent,Prohead,Prodiv} from './ProfileStyles';

function Profile() {
  return (
    <PageWrapper>
      <Prohead>
        <Proheader>Account Settings</Proheader></Prohead>
      <Procontent>
      <Procard>
        <Image src="https://res.cloudinary.com/delrn2vxa/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1725000714/7860be4e-9f73-485f-9a3b-9fde12d89f31_1_ygxbur.jpg" alt="pro"/>
      <Prodiv>
        <p>shiva</p>
        <p>xxx@gmail.com</p>
      </Prodiv>
      </Procard>
      <p>
      Lorem ipsum dolor sit amet, consetetur sadip scing elitr. Sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam.
</p></Procontent>

    </PageWrapper>
  );
}

export default Profile;
