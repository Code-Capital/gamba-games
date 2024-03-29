import { Route, Routes } from 'react-router-dom';
import { ProtectedLayout } from '../layouts/ProtectedLayout';
import { CoinFlip, Home, GameRoulette, TermsPolicies, Profile, KingsRoad, UserRoutette } from '../pages';

export const ProtectedRoutes = () => {
  return (
    <Routes>
      <Route element={<ProtectedLayout />}>
        <Route index element={<Home />} />
        <Route path='/coinflip' element={<CoinFlip />} />
        <Route path='/roulette' element={<GameRoulette />} />
        <Route path='/terms-and-policies' element={<TermsPolicies />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/kingroad' element={<KingsRoad />} />
        <Route path='/user-roulette' element={<UserRoutette />} />
        <Route path='*' element={<Home />} />
      </Route>
    </Routes>
  );
};
