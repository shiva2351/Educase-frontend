
import { PageWrapper,Procard, Heading ,Image} from './ProfileStyles';

function Profile() {
  return (
    <PageWrapper>
      <nav>Account Settings</nav>
      <Procard>
        <Image src="https://res.cloudinary.com/delrn2vxa/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1725000714/7860be4e-9f73-485f-9a3b-9fde12d89f31_1_ygxbur.jpg" alt="pro"/>
      <div>
        <p>shiva</p>
        <p>xxx@gmail.com</p>
      </div>
      </Procard>
    </PageWrapper>
  );
}

export default Profile;
