import { Navigate, Route, Routes } from 'react-router-dom';
import { ProtectedLayout } from '../layouts/ProtectedLayout';
import { CoinFlip, Home, GameRoulette, Profile, KingsRoad, UserRoutette, TermsPolicies } from '../pages';

export const ProtectedRoutes = () => {
  return (
    <Routes>
      <Route element={<ProtectedLayout />}>
        <Route index element={<Home />} />
        <Route path='/coinflip' element={<CoinFlip />} />
        <Route path='/roulette' element={<GameRoulette />} />
        <Route path='/kingroad' element={<KingsRoad />} />
        <Route path='/user-roulette' element={<UserRoutette />} />

        {/* Terms and Policies */}

        <Route path='/privacy-policy' element={<TermsPolicies />} />
        <Route path='/affiliates' element={<TermsPolicies />} />
        <Route path='/terms-of-service' element={<TermsPolicies />} />
        <Route path='/faq' element={<TermsPolicies />} />
        <Route path='/support' element={<TermsPolicies />} />
        <Route path='/fairness' element={<TermsPolicies />} />

        {/* Profile */}

        <Route path='/profile' element={<Profile />} />
        <Route path='/settings' element={<Profile />} />
        <Route path='/selfExclusion' element={<Profile />} />
        <Route path='/gameHistory' element={<Profile />} />
        <Route path='/transactions' element={<Profile />} />

        <Route path='/*' element={<Navigate replace to='/' />} />
      </Route>
    </Routes>
  );
};
