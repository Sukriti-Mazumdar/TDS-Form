import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const TDSDetailsForm = ({ onLogout }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    tdsType: 'Salary',
    deductorName: '',
    deductorTan: '',
    deductorPan: '',
    deducteeName: '',
    deducteePan: '',
    emailId: '',
    phoneNumber: '',
    assessmentYear: '2024-25',
    quarterPeriod: 'Q1',
    dateOfDeduction: '',
    dueDate: '',
    filingDate: '',
    status: 'Pending'
  });

  const [attachments, setAttachments] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files);
    setAttachments(prev => [...prev, ...files]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted with data:', formData);
    console.log('Attachments:', attachments);
    alert('TDS Details Submitted Successfully!');
  };

  const handleLogout = () => {
    if (onLogout) {
      onLogout();
    }
    navigate('/login');
  };

  const styles = {
    container: {
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#f5f5f5',
      minHeight: '100vh',
      padding: '20px',
    },
    form: {
      backgroundColor: '#e8e8e8',
      maxWidth: '800px',
      margin: '0 auto',
      padding: '30px',
      borderRadius: '8px',
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
    },
    header: {
      textAlign: 'center',
      marginBottom: '30px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    title: {
      fontSize: '24px',
      fontWeight: 'bold',
      color: '#333',
      marginBottom: '5px',
    },
    logoutButton: {
      backgroundColor: '#dc3545',
      color: 'white',
      padding: '8px 16px',
      border: 'none',
      borderRadius: '4px',
      fontSize: '14px',
      fontWeight: 'bold',
      cursor: 'pointer',
    },
    subtitle: {
      fontSize: '14px',
      color: '#666',
    },
    section: {
      marginBottom: '30px',
    },
    sectionTitle: {
      fontSize: '16px',
      fontWeight: 'bold',
      color: '#333',
      marginBottom: '15px',
    },
    tdsTypeContainer: {
      display: 'flex',
      gap: '10px',
      marginBottom: '20px',
      flexWrap: 'wrap',
    },
    tdsTypeButton: {
      padding: '8px 16px',
      border: '1px solid #ccc',
      backgroundColor: '#f8f8f8',
      cursor: 'pointer',
      borderRadius: '4px',
      fontSize: '14px',
    },
    tdsTypeButtonActive: {
      padding: '8px 16px',
      border: '1px solid #007bff',
      backgroundColor: '#007bff',
      color: 'white',
      cursor: 'pointer',
      borderRadius: '4px',
      fontSize: '14px',
    },
    row: {
      display: 'flex',
      gap: '20px',
      marginBottom: '15px',
    },
    column: {
      flex: '1',
    },
    label: {
      display: 'block',
      fontSize: '14px',
      fontWeight: '500',
      color: '#333',
      marginBottom: '5px',
    },
    input: {
      width: '100%',
      padding: '10px',
      border: '1px solid #ccc',
      borderRadius: '4px',
      fontSize: '14px',
      backgroundColor: 'white',
      boxSizing: 'border-box',
    },
    select: {
      width: '100%',
      padding: '10px',
      border: '1px solid #ccc',
      borderRadius: '4px',
      fontSize: '14px',
      backgroundColor: 'white',
      boxSizing: 'border-box',
    },
    statusContainer: {
      display: 'flex',
      gap: '15px',
      alignItems: 'center',
      marginTop: '10px',
    },
    statusOption: {
      display: 'flex',
      alignItems: 'center',
      gap: '5px',
    },
    statusLabel: {
      fontSize: '14px',
      cursor: 'pointer',
    },
    pendingLabel: {
      backgroundColor: '#ffc107',
      color: 'white',
      padding: '4px 8px',
      borderRadius: '12px',
      fontSize: '12px',
    },
    filedLabel: {
      backgroundColor: '#28a745',
      color: 'white',
      padding: '4px 8px',
      borderRadius: '12px',
      fontSize: '12px',
    },
    rejectedLabel: {
      backgroundColor: '#dc3545',
      color: 'white',
      padding: '4px 8px',
      borderRadius: '12px',
      fontSize: '12px',
    },
    attachmentContainer: {
      border: '2px dashed #ccc',
      borderRadius: '8px',
      padding: '40px',
      textAlign: 'center',
      backgroundColor: 'white',
      marginTop: '10px',
    },
    uploadIcon: {
      fontSize: '48px',
      color: '#ccc',
      marginBottom: '10px',
    },
    uploadText: {
      fontSize: '14px',
      color: '#666',
      marginBottom: '5px',
    },
    uploadSubtext: {
      fontSize: '12px',
      color: '#999',
      marginBottom: '15px',
    },
    uploadButton: {
      backgroundColor: '#f8f9fa',
      border: '1px solid #ccc',
      padding: '8px 16px',
      borderRadius: '4px',
      cursor: 'pointer',
      fontSize: '14px',
    },
    submitButton: {
      backgroundColor: '#007bff',
      color: 'white',
      padding: '12px 30px',
      border: 'none',
      borderRadius: '4px',
      fontSize: '16px',
      fontWeight: 'bold',
      cursor: 'pointer',
      display: 'block',
      margin: '30px auto 0',
    },
    fileInput: {
      display: 'none',
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.form}>
        <div style={styles.header}>
          <h1 style={styles.title}>TDS Details Entry</h1>
          <button style={styles.logoutButton} onClick={handleLogout}>
            Logout
          </button>
        </div>
        <p style={styles.subtitle}>Input the TDS-related details</p>

        {/* TDS Type Selection */}
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>Select TDS Type</h2>
          <div style={styles.tdsTypeContainer}>
            {['Salary', 'Professional Fees', 'Commission', 'Interest', 'Rent', 'Contractor'].map((type) => (
              <button
                key={type}
                type="button"
                style={formData.tdsType === type ? styles.tdsTypeButtonActive : styles.tdsTypeButton}
                onClick={() => setFormData(prev => ({ ...prev, tdsType: type }))}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* Deductor Information */}
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>Deductor Information</h2>
          
          <div style={styles.row}>
            <div style={styles.column}>
              <label style={styles.label}>Deductor Name *</label>
              <input
                type="text"
                name="deductorName"
                placeholder="Enter deductor name/company"
                style={styles.input}
                value={formData.deductorName}
                onChange={handleInputChange}
                required
              />
            </div>
            <div style={styles.column}>
              <label style={styles.label}>TAN Number *</label>
              <input
                type="text"
                name="deductorTan"
                placeholder="Enter TAN number"
                style={styles.input}
                value={formData.deductorTan}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>

          <div style={styles.row}>
            <div style={styles.column}>
              <label style={styles.label}>Deductor PAN *</label>
              <input
                type="text"
                name="deductorPan"
                placeholder="Enter deductor PAN"
                style={styles.input}
                value={formData.deductorPan}
                onChange={handleInputChange}
                required
              />
            </div>
            <div style={styles.column}>
              <label style={styles.label}>Email ID *</label>
              <input
                type="email"
                name="emailId"
                placeholder="Enter email address"
                style={styles.input}
                value={formData.emailId}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>

          <div style={styles.row}>
            <div style={styles.column}>
              <label style={styles.label}>Phone Number *</label>
              <input
                type="tel"
                name="phoneNumber"
                placeholder="Enter phone number"
                style={styles.input}
                value={formData.phoneNumber}
                onChange={handleInputChange}
                required
              />
            </div>
            <div style={styles.column}>
              <label style={styles.label}>Assessment Year *</label>
              <select
                name="assessmentYear"
                style={styles.select}
                value={formData.assessmentYear}
                onChange={handleInputChange}
                required
              >
                <option value="2024-25">2024-25</option>
                <option value="2023-24">2023-24</option>
                <option value="2022-23">2022-23</option>
                <option value="2021-22">2021-22</option>
              </select>
            </div>
          </div>
        </div>

        {/* Deductee Information */}
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>Deductee Information</h2>
          
          <div style={styles.row}>
            <div style={styles.column}>
              <label style={styles.label}>Deductee Name *</label>
              <input
                type="text"
                name="deducteeName"
                placeholder="Enter deductee name"
                style={styles.input}
                value={formData.deducteeName}
                onChange={handleInputChange}
                required
              />
            </div>
            <div style={styles.column}>
              <label style={styles.label}>Deductee PAN *</label>
              <input
                type="text"
                name="deducteePan"
                placeholder="Enter deductee PAN"
                style={styles.input}
                value={formData.deducteePan}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>

          <div style={styles.row}>
            <div style={styles.column}>
              <label style={styles.label}>Quarter Period *</label>
              <select
                name="quarterPeriod"
                style={styles.select}
                value={formData.quarterPeriod}
                onChange={handleInputChange}
                required
              >
                <option value="Q1">Q1 (Apr-Jun)</option>
                <option value="Q2">Q2 (Jul-Sep)</option>
                <option value="Q3">Q3 (Oct-Dec)</option>
                <option value="Q4">Q4 (Jan-Mar)</option>
              </select>
            </div>
            <div style={styles.column}>
              <label style={styles.label}>Date of Deduction</label>
              <input
                type="date"
                name="dateOfDeduction"
                style={styles.input}
                value={formData.dateOfDeduction}
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>

        {/* Filing Details */}
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>Filing Details</h2>
          
          <div style={styles.row}>
            <div style={styles.column}>
              <label style={styles.label}>Due Date</label>
              <input
                type="date"
                name="dueDate"
                style={styles.input}
                value={formData.dueDate}
                onChange={handleInputChange}
              />
            </div>
            <div style={styles.column}>
              <label style={styles.label}>Filing Date</label>
              <input
                type="date"
                name="filingDate"
                style={styles.input}
                value={formData.filingDate}
                onChange={handleInputChange}
              />
            </div>
          </div>

          {/* Status */}
          <div>
            <label style={styles.label}>Status</label>
            <div style={styles.statusContainer}>
              <div style={styles.statusOption}>
                <input
                  type="radio"
                  id="pending"
                  name="status"
                  value="Pending"
                  checked={formData.status === 'Pending'}
                  onChange={handleInputChange}
                />
                <label htmlFor="pending" style={styles.pendingLabel}>Pending</label>
              </div>
              <div style={styles.statusOption}>
                <input
                  type="radio"
                  id="filed"
                  name="status"
                  value="Filed"
                  checked={formData.status === 'Filed'}
                  onChange={handleInputChange}
                />
                <label htmlFor="filed" style={styles.filedLabel}>Filed</label>
              </div>
              <div style={styles.statusOption}>
                <input
                  type="radio"
                  id="rejected"
                  name="status"
                  value="Rejected"
                  checked={formData.status === 'Rejected'}
                  onChange={handleInputChange}
                />
                <label htmlFor="rejected" style={styles.rejectedLabel}>Rejected</label>
              </div>
            </div>
            <div style={{ fontSize: '12px', color: '#666', marginTop: '5px' }}>
              Select status
            </div>
          </div>
        </div>

        {/* Attachments */}
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>Attachments</h2>
          <div style={styles.attachmentContainer}>
            <div style={styles.uploadIcon}>↑</div>
            <div style={styles.uploadText}>Click to upload or drag and drop</div>
            <div style={styles.uploadSubtext}>Supported formats: PDF, DOC</div>
            <input
              type="file"
              id="fileInput"
              style={styles.fileInput}
              multiple
              accept=".pdf,.doc,.docx"
              onChange={handleFileUpload}
            />
            <label htmlFor="fileInput" style={styles.uploadButton}>
              Upload Files
            </label>
          </div>
          {attachments.length > 0 && (
            <div style={{ marginTop: '10px' }}>
              <strong>Uploaded files:</strong>
              <ul>
                {attachments.map((file, index) => (
                  <li key={index} style={{ fontSize: '14px', color: '#666' }}>
                    {file.name}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <button type="button" style={styles.submitButton} onClick={handleSubmit}>
          Submit TDS Details
        </button>
      </div>
    </div>
  );
};

export default TDSDetailsForm;
