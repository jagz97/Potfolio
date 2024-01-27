import Image from 'next/image';
import { FC } from 'react';

interface ProfilePicProps {}

const ProfilePic: FC<ProfilePicProps> = ({}) => {
    return (
        <div className="">
            <Image
                alt="Jagjit Singh"
                src="/images/myimage.png"
                height={120}
                width={250}
                className="object-cover  shadow-md"
            />
        </div>
    );
};

export default ProfilePic;
