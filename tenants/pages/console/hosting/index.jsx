import { supabase } from '9mbs/supabase.config';
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { ConsoleLayout } from '../../../components/ConsoleLayout';
import { FullNavigation, navigation } from '../../../components/AppNavigation';

const HostingHomePage = ({ primaryTitle, secondaryTitle }) => {
  return (
    <ConsoleLayout
      primaryTitle={primaryTitle}
      secondaryTitle={secondaryTitle}
      navigation={navigation}
      primary={() => <FullNavigation navigation={navigation.find(nav => nav.name === 'Hosting').children} />}
    />
  )
}

export const getServerSideProps = async (context) => {

  return {
    props: {
      primaryTitle: 'Hosting',
      secondaryTitle: 'Recent deployments'
    }
  }
}

export default HostingHomePage;