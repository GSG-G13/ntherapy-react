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

const TypographyStyle: Type = {
  fontWeight: 'bold',
  marginBottom: '-20px',
  color: '#2B127B',
  marginLeft: '60px',
};

const BoxStyle: Type = {
  display: 'flex',
  alignItems: 'center',
  fontFamily: 'inherit',
  width: '900px',
  marginTop: '8px',
};
const ModelStyle : Type = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const ButtonStyle: Type = {
  marginTop: '16px',
  fontSize: '12px',
  width: '160px',
};

export {
  TypographyStyle, BoxStyle, ModelStyle, ButtonStyle,
};
export type { TherapistData };
