function goToNextCheckpoint(nextCheckpoint) {
    const currentCheckpoint = document.querySelector('.checkpoint:not([style*="display: none"])');
    currentCheckpoint.style.display = 'none';

    const nextCheckpointElement = document.getElementById(`checkpoint-${nextCheckpoint}`);
    if (nextCheckpointElement) {
        nextCheckpointElement.style.display = 'block';
    } else {
        alert('目的地に到着しました！');
    }
}
