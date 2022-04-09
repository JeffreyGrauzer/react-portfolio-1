import React, { useState } from 'react';

import Modal from '../Modal';

const PhotoList = ({ category }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentPhoto, setCurrentPhoto] = useState();
    const [photos] = useState([
        {
            name: 'climate cuisine',
            category: 'group project',
            description: 'App designed to pair entrees with weather conditions for the day',
        },
        {
            name: 'penguin post',
            category: 'group project',
            description: 'Social media app for communicating with and making new friends',
        },
        {
            name: 'git it done',
            category: 'class project',
            description: 'App designed to sort and organize through users daily tasks',
        },
        {
            name: 'taskmaster',
            category: 'class project',
            description: 'App designed to organize users daily tasks',
        },
        {
            name: 'run buddy',
            category: 'class project',
            description: 'App for organizing group runs and trainer appointments',
        },
        {
            name: 'zookeeper',
            category: 'class project',
            description: 'App for keeping track of zoo animal inventory',
        },
    ]);

    const currentPhotos = photos.filter(photo => photo.category === category);
    

    const toggleModal = (image, i) => {
        setCurrentPhoto({ ...image, index: i });
        setIsModalOpen(!isModalOpen);
    };
    return (
    <div>
        {isModalOpen && (
            <Modal onClose={toggleModal} currentPhoto={currentPhoto} />
        )}
        <div className="flex-row">
            {currentPhotos.map((image, i) => (
                <img
                  src={require(`../../assets/cover/${category}/${i}.png`)}
                  alt={image.name}
                  className="img-thumbnail mx-1"
                  onClick={() => toggleModal(image, i)}
                  key={image.name}
            />
          ))}
        </div>
      </div>
    );
};

export default PhotoList;