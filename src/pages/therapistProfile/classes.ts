interface Type {
    [key: string]: string;
}

interface TherapistData {
    id: number;
    cvLink: string;
    profileImg: string;
    major: string;
    hourlyRate: number;
    bio: string;
    user: {
        fullName?: string;
        email?: string;
        isActive: boolean;
    };
}

const imageStyle: Type = {
  width: '100%',
  height: '260px',
  objectFit: 'cover',
  
};

const TypographyStyle: Type = {
  marginLeft: '30px',
  paddingTop: '20px',
  fontSize: '28px',
  color: '#2B127B',
  fontWeight: 'bolder',
};

const BoxStyle: Type = {
  width: '83%',
  backgroundColor: '#eee',
};
const ModelStyle : Type = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

export {
  imageStyle, TypographyStyle, BoxStyle, ModelStyle,
};
export type { TherapistData };
