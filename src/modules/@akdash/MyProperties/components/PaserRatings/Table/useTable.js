

export const useTable = props => {

    const rows = [
        { src: '/images/circles/center.svg,/images/circles/excellent.svg', ranking: '9–10', condition: 'Excellent', appearance: 'Like new', maintenance: 'None' },
        { src: '/images/circles/center.svg,/images/circles/very-good.svg', ranking: '8', condition: 'Very Good',
            appearance: 'No longitudinal cracks, occasional transverse cracks that are at least 40’ apart from',
            maintenance: 'Little or no maintenance needed' },
        { src: '/images/circles/center.svg,/images/circles/good.svg', ranking: '6–7', condition: 'Good',
            appearance: 'Minimal cracks with some traffic wear',
            maintenance: 'Routine crack filling and sealcoating' },
        { src: '/images/circles/center.svg,/images/circles/fair.svg', ranking: '4–5', condition: 'Fair',
            appearance: 'More cracking, more traffic wear, slight rutting or distortions',
            maintenance: 'Sealcoating, patching, surface overlay' },
        { src: '/images/circles/very-poor.svg', ranking: '2', condition: 'Very Poor',
            appearance: 'Severe cracking and distortions, multiple potholes',
            maintenance: 'Reconstruction with extensive base repair' },
        { src: '/images/circles/failed.svg', ranking: '1', condition: 'Failed',
            appearance: 'Severe cracking and distortions, multiple potholes',
            maintenance: 'Total reconstruction needed' },
    ];

    return {
        rows
    }
}