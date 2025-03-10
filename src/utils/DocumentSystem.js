class DocumentSystem {
    static showUploadModal(type) {
        // Implementation for document upload modal
    }

    static async uploadDocument(type, file, metadata) {
        // Implementation for document upload
    }

    static showDocTab(tabId) {
        document.querySelectorAll('.doc-content').forEach(tab => 
            tab.classList.remove('active'));
        document.querySelectorAll('.doc-tab').forEach(tab => 
            tab.classList.remove('active'));
        
        document.getElementById(`${tabId}-docs`).classList.add('active');
        document.querySelector(`[onclick="showDocTab('${tabId}')"]`).classList.add('active');
    }
}