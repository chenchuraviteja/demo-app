import React, { useEffect, useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import { InfinitySpin } from "react-loader-spinner";
import axios from 'axios';
import '../App.css'
import { useTranslation } from 'react-i18next';

const Dashboard = () => {
  	const navigate = useNavigate();
  	const [imageUrl, setImageUrl] = useState('');
	const { t } = useTranslation();

  	useEffect(() => {
    	axios.get('https://dog.ceo/api/breeds/image/random')
      		.then(response => {
        		setImageUrl(response.data.message);
      		})
      		.catch(error => {
        		console.error('Error fetching image:', error);
      		});
  	}, []);

  	const logout = () => {
    	navigate("/");
  	};

	return (
		<div className="dashboard">
			<div className="position-absolute mx-auto top-0 end-0 p-4">
				<div className="custom-input">
					<button className='btn btn-danger' onClick={logout}> {t('logout')} </button>
				</div>
			</div>
			{!imageUrl && (
				<InfinitySpin
				visible={true}
				width="200"
				color="#4fa94d"
				ariaLabel="infinity-spin-loading"
				/>
			)}

			{imageUrl && (
				<img src={imageUrl} alt="dashboard_img" className="img-fluid" />
			)}
		</div>
	);
};

export default Dashboard;
