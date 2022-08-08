import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './MovieCard.scss';

const MovieCard = () => {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: '해리포터와 마법사의 돌',
      img: (
        <img src='https://w.namu.la/s/0f67529c8ac5da2259a51df1199681b4083afc318c9789586af9365909874926b3120bae07ec616d8a0a12bd0956c77ed3dc7d2f3fe610bef7e97d0c38183a14762caca7a78e318050b488fe525d0aed2018f0043c89bb7e55f511b755bde01e9dfa7b3645645d81ac3549c81f9bf5b5' />
      ),
      desc: '해리포터 1편',
    },
    {
      id: 2,
      title: '해리포터와 비밀의 방',
      img: (
        <img src='https://w.namu.la/s/cc917504899efa6d214681e72c871a41eb8a34ea2b4570e2f3d0a6cc1bbaddeb698d0249d0767d690ae59226337b99f9195effc09d40b5c2a5e1d6021ee4306833ccdc641edfbbb2162fda274fc5c784d5ac9c426e83dfcd6c263ce7adb7161a93fb2b69bc34b95185311e16a666d484' />
      ),
      desc: '해리포터 2편',
    },
    {
      id: 3,
      title: '해리포터와 아즈카반의 죄수',
      img: (
        <img src='https://w.namu.la/s/0e2aab58be01c8c193a04372144edeb986e238d09c4630ab396336f74182f06028f581b016ad43aa40dab94e79010ca2a78d3230b70f4e09f9ddbbf78e401667e8ac1c1044fa4ab17ece09158ac0accbbd59c3ee55dc64ddfe5a1a45cf012074b240415cc43d13761f6756d59c8550ea' />
      ),
      desc: '해리포터 3편',
    },
    {
      id: 4,
      title: '해리포터와 불의 잔',
      img: (
        <img src='https://w.namu.la/s/8c719742b70b817f42c677aab8da771bfbf4f6b2ee154cae29e973a309aaa2d551a895819bb567c9245a30496b097d636ac586b274ae0d266dd94583a7b23f04cd38f18460af16a1656d1c9e5ec6e88c3e3c9e65e79e9ad384b3411195fa5a915760cc23dda062d79e2a80337c2017e2' />
      ),
      desc: '해리포터 4편',
    },
  ]);

  console.log(movies);

  return (
    <>
      {movies.map((a, i) => {
        return (
          <div className='card-inner' key={movies[i].id}>
            <div className='card-top'>
              <img src={movies[i].img.props.src} alt={movies[i].title} />
            </div>
            <div className='card-bottom'>
              <div className='card-info'>
                <h4>{movies[i].title}</h4>
                <p>{movies[i].desc}</p>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default MovieCard;
