import { gql } from '@apollo/client';

export const GET_KEY_METRICS = gql`
    query getKeyMetrics {
        metrics {
            info
            title
            value
        }
}`;

export default {GET_KEY_METRICS};  