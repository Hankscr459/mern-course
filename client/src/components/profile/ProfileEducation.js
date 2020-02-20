import React from 'react';
import PropTypes from 'prop-types';
import Monent from 'react-moment';

const ProfileEducation = ({
    education: { school, degree, fieldofstudy, current, to, from, description }
}) => (
    <div>
        <h3 className="text-dark">{school}</h3>
        <p>
            <Monent format='YYYY/MM/DD'>{from}</Monent> -{' '}
            {!to ? ' Now' : <Monent format='YYYY/MM/DD'>{to}</Monent>}
        </p>
        <p>
            <strong>Degree: </strong>{degree}
        </p>
        <p>
            <strong>Fescription: </strong> {fieldofstudy}
        </p>
        <p>
            <strong>Description: </strong> {description}
        </p>
    </div>
)

ProfileEducation.propTypes = {
    education: PropTypes.object.isRequired,
}

export default ProfileEducation
