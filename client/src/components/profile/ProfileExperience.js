import React from 'react';
import PropTypes from 'prop-types';
import Monent from 'react-moment';

const ProfileExperience = ({
    experience: { company, title, location, current, to, from, description }
}) => (
    <div>
        <h3 className="text-dark">{company}</h3>
        <p>
            <Monent format='YYYY/MM/DD'>{from}</Monent> -{' '}
            {!to ? ' Now' : <Monent format='YYYY/MM/DD'>{to}</Monent>}
        </p>
        <p>
            <strong>Position: </strong>{title}
        </p>
        <p>
            <strong>Description: </strong> {description}
        </p>
    </div>
)

ProfileExperience.propTypes = {
    experience: PropTypes.object.isRequired,
}

export default ProfileExperience
