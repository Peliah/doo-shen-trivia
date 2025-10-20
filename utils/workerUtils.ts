// Random Worker Utility
// Returns a random worker image source for various app functionalities

export function getRandomWorker(): any {
    const workers = [
        require('@/assets/images/workers/worker2.png'),
        require('@/assets/images/workers/worker3.png'),
        require('@/assets/images/workers/worker4.png'),
        require('@/assets/images/workers/worker5.png'),
        require('@/assets/images/workers/worker6.png'),
        require('@/assets/images/workers/worker7.png'),
        require('@/assets/images/workers/worker8.png'),
        require('@/assets/images/workers/worker9.png'),
        require('@/assets/images/workers/worker10.png'),
        require('@/assets/images/workers/worker11.png'),
        require('@/assets/images/workers/worker12.png'),
        require('@/assets/images/workers/worker13.png'),
        require('@/assets/images/workers/worker14.png'),
        require('@/assets/images/workers/worker15.png'),
        require('@/assets/images/workers/worker16.png'),
        require('@/assets/images/workers/worker17.png'),
        require('@/assets/images/workers/worker18.png'),
    ];

    const randomIndex = Math.floor(Math.random() * workers.length);
    return workers[randomIndex];
}

