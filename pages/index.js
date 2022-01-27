import { Box, Button, Text, TextField, Image } from '@skynexui/components';
import appConfig from '../config.json'
import React from 'react';
import { useRouter} from 'next/router'; // useAlgumacoisa é um hook
import next from 'next';

function Title(props){
    console.log(props);
    const Tag = props.tag

    return (
        <>
            <Tag>{props.children}</Tag>

            <style jsx>
                {`
                    ${Tag} 
                        {
                            color: ${appConfig.theme.colors.neutrals['000']};
                            font-size: 40px;
                        }
                `}

            </style>
        </>
    );
}

export default function PaginaInicial() {
  const [username, setUsername] = React.useState('anafelizatti');
  const roteamento = useRouter();
  
    return (
      <>
        <Box
          styleSheet={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            backgroundColor: appConfig.theme.colors.primary[100],
            backgroundImage: 'url(https://wallpaper.dog/large/17260441.png)',
            backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundBlendMode: 'multiply',
          }}
        >
          <Box
            styleSheet={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexDirection: {
                xs: 'column',
                sm: 'row',
              },
              width: '100%', maxWidth: '700px',
              borderRadius: '30px', padding: '50px', margin: '26px',
              boxShadow: '0 10px 20px 0 rgb(0 0 0 / 40%)',
              backgroundColor: appConfig.theme.colors.neutrals[400], opacity:0.9,
              backgroundImage: 'url(https://media.istockphoto.com/photos/violet-cloud-picture-id999899330?b=1&k=20&m=999899330&s=170667a&w=0&h=LFxYLDgp8snsa0fUeJ87JQ9kTca2TT8w9kW9by0e3fQ=)',
              
            }}
          >
            {/* Formulário */}
            <Box
              as="form"
              onSubmit={function (infosDoEvento) {
                infosDoEvento.preventDefault();
                console.log('Alguém submeteu o form');
                roteamento.push('/chat');
              }}
              styleSheet={{
                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                width: { xs: '100%', sm: '60%' }, textAlign: 'center', marginBottom: '10px',opacity: 1
              }}
            >
              <Title tag="h2">Who is there?</Title>
              <Text variant="body3" styleSheet={{ marginBottom: '32px', color: appConfig.theme.colors.neutrals[800] }}>
                {appConfig.name}
              </Text>
  
              <TextField
                value={username}
                onChange={function (event) {
                  console.log('usuario digitou', event.target.value);
                  const valor = event.target.value;
                  setUsername(valor);
                }}
                fullWidth
                textFieldColors={{
                  neutral: {
                    textColor: appConfig.theme.colors.primary[900],
                    mainColor: appConfig.theme.colors.neutrals[200],
                    mainColorHighlight: appConfig.theme.colors.primary[900],
                    backgroundColor: appConfig.theme.colors.neutrals[300],
                  },
                }}
              />
              <Button
                type='submit'
                label='Entrar'
                fullWidth
                buttonColors={{
                  contrastColor: appConfig.theme.colors.neutrals["000"],
                  mainColor: appConfig.theme.colors.primary[600],
                  mainColorLight: appConfig.theme.colors.primary[600],
                  mainColorStrong: appConfig.theme.colors.primary[800],
                }}
              />
            </Box>
            {/* Formulário */}
  
  
            {/* Photo Area */}
            <Box
              styleSheet={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                maxWidth: '200px',
                padding: '16px',
                backgroundColor: appConfig.theme.colors.primary[800],
                borderRadius: '10%',
                flex: 1,
                minHeight: '240px',
                opacity:0.9,
              }}
            >
              <Image
                styleSheet={{
                  borderRadius: '50%',
                  marginBottom: '15px',
                  opacity: 1
                }}
                src={username.length >= 2 ? `https://github.com/${username}.png` : ""}
              />
              <Text
                variant="body4"
                styleSheet={{
                  color: appConfig.theme.colors.neutrals[800],
                  backgroundColor: appConfig.theme.colors.neutrals[300],
                  padding: '5px 10px',
                  borderRadius: '100px'
                }}
              >
                {username}
              </Text>
            </Box>
            {/* Photo Area */}
          </Box>
        </Box>
      </>
    );
  }

