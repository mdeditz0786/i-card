"use client"
import Header from "./header/page"
import { IdentificationIcon } from '@heroicons/react/16/solid'
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import { use, useEffect, useState, useCallback } from 'react'
import { MagnifyingGlassIcon, TrashIcon, PencilSquareIcon, UserPlusIcon, PhotoIcon } from '@heroicons/react/20/solid'
import axios from "axios"
import html2canvas from 'html2canvas';
import dynamic from 'next/dynamic';
import { toast } from 'react-hot-toast';

const HeaderDynamic = dynamic(() => import('./header/page'), { ssr: false });

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function App() {
  const initialState = {
    fullname: '',
    course: '',
    dob: '',
    address: '',
    email: '',
    expiry: '',
    phoneNumber: '',
    imageurl: ''
  }
  const idcard = {
    studentid: 'null',
    fullname: '..',
    course: '..',
    dob: '...',
    address: '..',
    email: '...',
    expiry: '...',
    phoneNumber: '..',
    imageurl: '...'
  }
  const [state, setState] = useState(initialState)
  const [open, setOpen] = useState(false)
  const [nopen, setNopen] = useState(false)
  const [iddel, setIddel] = useState("")
  const [iddetails, setiddetails] = useState(idcard)
  const [iloader, setIloader] = useState(true)
  const [idcardshow, setIdcardshow] = useState(true)
  const [idnum, setIdnum] = useState("")
  const [student, setStudent] = useState([])
  const [idopen, setIdopen] = useState(false)
  const [file, setFile] = useState(null);
  const [error, setError] = useState({})
  const [loading, setLoading] = useState(false)
  const [name, setName] = useState(false)
  const [editMode, setEditMode] = useState(false);
  const [editStudent, setEditStudent] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 5;
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const initialStudentState = {
    name: '',
    studentId: '',
    status: 'active'
  };
  const [newStudent, setNewStudent] = useState(initialStudentState);
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });
  const [refreshKey, setRefreshKey] = useState(0);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editingStudent, setEditingStudent] = useState(null);
  const [errors, setErrors] = useState({});

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setError({})

  };

  const handleInput = (e) => {
    if (editMode) {
      setEditStudent({
        ...editStudent,
        [e.target.name]: e.target.value,
      });
    } else {
      setState({
        ...state,
        [e.target.name]: e.target.value,
      });
    }
    setError("")
  }
  const imgUrl = (str) => {
    setState((pre) => ({ ...pre, imageurl: str }))
  }

  const uploadFile = async () => {
    const formData = new FormData();
    formData.append('file', file);
    await axios.post('/api/upload', formData).then((res) => {
      imgUrl(res.data.url)
      console.log(res.data.url);


    })
  }
  const SubmitHandle = async (e) => {
    e.preventDefault()
    await axios.post("/api/student", state).then((e) => {
      alert("data submited")
    })
  }

  const idgenerate = async () => {
    setIdcardshow(false)
    setIloader(true)
    const res = await axios.post("/api/getstudent", { "id": idnum })
    if (res.status == 200) {
      setiddetails(res.data.response)
      setIloader(false)
    }
  }


  const takeScreenshot = () => {
    html2canvas(document.querySelector("#yourDivId"), { useCORS: true }).then(canvas => {
      const imgData = canvas.toDataURL("image/png");
      const link = document.createElement('a');
      link.href = imgData;
      link.download = 'IDcard.png';
      link.click();
    });
  };
const getstudent = async()=>{
  await axios.get("/api/allstudent").then((res)=>{
    setStudent(res.data.response)

  })
}

const searchUser =()=>{
  const filteredUsers = student.filter(user => user.fullname.toLowerCase().includes(name.toLowerCase()));
  setStudent(filteredUsers);
}

const deleteuser = async()=>{
  await axios.post("/api/delete",{"id":iddel}).then((res)=>{
    alert("deleted")

  })
}

const handleEdit = (student) => {
  setEditMode(true);
  setEditStudent(student);
  setNopen(true);
};

const updateStudent = async (e) => {
  e.preventDefault();
  try {
    const response = await axios.put(`/api/students/${editStudent.id}`, editStudent);
    if (response.status === 200) {
      setNopen(false);
      setEditMode(false);
      setEditStudent(null);
      // Refresh student list
      fetchStudents();
      toast.success('Student updated successfully');
    }
  } catch (error) {
    console.error('Error updating student:', error);
    toast.error('Failed to update student');
  }
};

const handleCloseForm = () => {
  setNopen(false);
  setEditMode(false);
  setEditStudent(null);
  setState(initialState); // Reset form state
};

  useEffect(() => {
    getstudent()
  },[])

  // Calculate pagination values
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = student.slice(indexOfFirstRow, indexOfLastRow);
  const totalPages = Math.ceil(student.length / rowsPerPage);

  // Immediate form reset function
  const resetForm = useCallback(() => {
    setNewStudent(initialStudentState);
    setSubmitStatus({ type: '', message: '' });
  }, []);

  // Error boundary for async operations
  const handleAsyncOperation = async (operation, successMessage) => {
    setIsLoading(true);
    try {
      await operation();
      toast.success(successMessage);
    } catch (error) {
      console.error('Operation failed:', error);
      toast.error(error.message || 'Operation failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  // Validate student data
  const validateStudent = (student) => {
    const errors = {};
    
    if (!student.name.trim()) {
      errors.name = 'Name is required';
    } else if (student.name.length < 2) {
      errors.name = 'Name must be at least 2 characters';
    }

    if (!student.studentId.trim()) {
      errors.studentId = 'Student ID is required';
    } else if (student.some(s => s.studentId === student.studentId)) {
      errors.studentId = 'Student ID already exists';
    }

    return errors;
  };

  // Handle add student with validation
  const handleAddStudent = async (e) => {
    e.preventDefault();
    setErrors({});

    // Validate form
    const validationErrors = validateStudent(newStudent);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    await handleAsyncOperation(async () => {
      const currentDate = new Date().toISOString().split('T')[0];
      const student = {
        ...newStudent,
        id: Date.now(),
        date: currentDate
      };

      // Check for duplicate ID
      if (student.some(s => s.studentId === student.studentId)) {
        throw new Error('Student ID already exists');
      }

      // Add to students array
      const updatedStudents = [student, ...student];
      setStudent(updatedStudents);
      
      // Save to localStorage
      await saveStudentsToStorage(updatedStudents);

      // Reset form and close modal
      setNewStudent(initialStudentState);
      setShowAddModal(false);
    }, 'Student added successfully');
  };

  // Add useEffect to refresh data
  useEffect(() => {
    const loadStudents = () => {
      const savedStudents = localStorage.getItem('students');
      if (savedStudents) {
        setStudent(JSON.parse(savedStudents));
      }
    };

    loadStudents();
  }, [refreshKey]); // This will re-run when refreshKey changes

  // Add delete function
  const handleDeleteStudent = async (studentId) => {
    await handleAsyncOperation(async () => {
      const studentToDelete = student.find(s => s.id === studentId);
      if (!studentToDelete) {
        throw new Error('Student not found');
      }

      const updatedStudents = student.filter(s => s.id !== studentId);
      setStudent(updatedStudents);
      localStorage.setItem('students', JSON.stringify(updatedStudents));
      setRefreshKey(oldKey => oldKey + 1);
    }, 'Student deleted successfully');
  };

  // Add edit function
  const handleEditClick = (student) => {
    setEditingStudent(student);
    setShowEditModal(true);
  };

  const handleUpdateStudent = (e) => {
    e.preventDefault();
    const updatedStudents = student.map(student => 
      student.id === editingStudent.id ? editingStudent : student
    );
    setStudent(updatedStudents);
    localStorage.setItem('students', JSON.stringify(updatedStudents));
    setShowEditModal(false);
    setEditingStudent(null);
    setRefreshKey(oldKey => oldKey + 1);
  };

  // Error boundary component
  const ErrorBoundary = ({ children }) => {
    if (errors && Object.keys(errors).length > 0) {
      return (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
          <h3 className="text-red-800 font-medium mb-2">Please correct the following errors:</h3>
          <ul className="list-disc list-inside text-red-600">
            {Object.values(errors).map((error, index) => (
              <li key={index}>{error}</li>
            ))}
          </ul>
        </div>
      );
    }
    return children;
  };

  return (
    <div>
        <HeaderDynamic />
      <main className="sm:px-32 px-4">
        <div className="flex flex-wrap gap-4  p-4">
              <button
                onClick={() => {
                  setNopen(!nopen);
                  setIdopen(false)
                }}
            className="flex flex-wrap gap-2 rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          > <UserPlusIcon className="h-5 w-5" /> Add New Student</button>
              <button
                onClick={() => {
                  setNopen(false);
                  setIdopen(!idopen)
                }}
                className="flex flex-wrap gap-2 rounded-md bg-purple-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-purple-500 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600"
              > <IdentificationIcon className="h-5 w-5" />Generate ID Card</button>


            </div>

            <div>
              {nopen && <form onSubmit={SubmitHandle}>
                <div className="space-y-5">
                  <div className=" pb-12">
                    <h2 className="text-base/7 font-semibold text-gray-900">Student Information</h2>
                    <p className="mt-1 text-sm/6 text-gray-600">Use a permanent address where you can receive mail.</p>

                    <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                      <div className="sm:col-span-2 sm:col-start-1">
                        <label htmlFor="fullname" className="block text-sm font-medium text-gray-700">
                          Student Name
                        </label>
                        <div className="mt-2 relative rounded-md shadow-sm">
                          <input
                            type="text"
                            name="fullname"
                            id="fullname"
                            onChange={(e) => handleInput(e)}
                            value={editMode ? editStudent?.fullname : state.fullname}
                            className="block w-full rounded-md border-0 py-2.5 px-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 transition-all duration-200 ease-in-out hover:ring-gray-400"
                            placeholder="Enter full name"
                          />
                        </div>
                      </div>

                      <div className="sm:col-span-3">
                        <label htmlFor="course" className="block text-sm font-medium text-gray-700">
                          Class
                        </label>
                        <div className="mt-2 relative rounded-md shadow-sm">
                          <select
                            id="course"
                            name="course"
                            onChange={(e) => handleInput(e)}
                            className="block w-full rounded-md border-0 py-2.5 px-3 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 transition-all duration-200 ease-in-out hover:ring-gray-400"
                          >
                            <option value="">Select Class</option>
                            <option value="BCA I">BCA I</option>
                            <option value="BCA II">BCA II</option>
                            <option value="BCA III">BCA III</option>
                          </select>
                        </div>
                      </div>

                      <div className="sm:col-span-1">
                        <label htmlFor="dob" className="block text-sm font-medium text-gray-700">
                          Date of Birth
                        </label>
                        <div className="mt-2 relative rounded-md shadow-sm">
                          <input
                            type="date"
                            name="dob"
                            id="dob"
                            onChange={(e) => handleInput(e)}
                            className="block w-full rounded-md border-0 py-2.5 px-3 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 transition-all duration-200 ease-in-out hover:ring-gray-400"
                          />
                        </div>
                      </div>
                      <div className="sm:col-span-2 sm:col-start-1">
                        <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                          Full Address
                        </label>
                        <div className="mt-2 relative rounded-md shadow-sm">
                          <input
                            type="text"
                            name="address"
                            id="address"
                            onChange={(e) => handleInput(e)}
                            className="block w-full rounded-md border-0 py-2.5 px-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 transition-all duration-200 ease-in-out hover:ring-gray-400"
                            placeholder="Enter full address"
                          />
                        </div>
                      </div>
                      <div className="sm:col-span-2">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                          Email
                        </label>
                        <div className="mt-2 relative rounded-md shadow-sm">
                          <input
                            type="email"
                            name="email"
                            id="email"
                            onChange={(e) => handleInput(e)}
                            className="block w-full rounded-md border-0 py-2.5 px-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 transition-all duration-200 ease-in-out hover:ring-gray-400"
                            placeholder="Enter email address"
                          />
                        </div>
                      </div>

                      <div className="sm:col-span-1">
                        <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">
                          Phone Number
                        </label>
                        <div className="mt-2 relative rounded-md shadow-sm">
                          <input
                            type="tel"
                            name="phoneNumber"
                            id="phoneNumber"
                            onChange={(e) => handleInput(e)}
                            className="block w-full rounded-md border-0 py-2.5 px-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 transition-all duration-200 ease-in-out hover:ring-gray-400"
                            placeholder="Enter phone number"
                          />
                        </div>
                      </div>
                      <div className="sm:col-span-1">
                        <label htmlFor="expiry" className="block text-sm font-medium text-gray-700">
                          Expiry Date
                        </label>
                        <div className="mt-2 relative rounded-md shadow-sm">
                          <input
                            type="date"
                            name="expiry"
                            id="expiry"
                            onChange={(e) => handleInput(e)}
                            className="block w-full rounded-md border-0 py-2.5 px-3 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 transition-all duration-200 ease-in-out hover:ring-gray-400"
                          />
                        </div>
                      </div>
                      <div className="sm:col-span-2">
                        {state.imageurl !== "" ? (
                          <img src={state.imageurl} width={330} height={200} alt='img' className="rounded-lg object-cover" />
                        ) : (
                          <div className="col-span-full">
                            <label htmlFor="file-upload" className="block text-sm font-medium leading-6 text-gray-900">
                              Upload Image*
                            </label>
                            
                            <div className="mt-2 flex justify-center rounded-lg border-2 border-dashed border-gray-200 px-6 py-8 hover:border-indigo-500 transition-colors duration-200 ease-in-out cursor-pointer">
                              <div className="text-center">
                                {file ? (
                                  // Preview selected file
                                  <div className="space-y-2">
                                    <div className="flex items-center justify-center">
                                      {file.type.startsWith('image/') ? (
                                        <img
                                          src={URL.createObjectURL(file)}
                                          alt="Preview"
                                          className="h-32 w-32 object-cover rounded-lg"
                                        />
                                      ) : (
                                        <PhotoIcon className="h-32 w-32 text-gray-300" />
                                      )}
                                    </div>
                                    <div className="flex items-center justify-center gap-2">
                                      <span className="text-sm text-gray-600">{file.name}</span>
                                      <button
                                        type="button"
                                        onClick={() => setFile(null)}
                                        className="text-sm text-red-600 hover:text-red-500"
                                      >
                                        Remove
                                      </button>
                                    </div>
                                    <button
                                      type="button"
                                      onClick={uploadFile}
                                      className="inline-flex items-center justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 ease-in-out"
                                    >
                                      {loading ? (
                                        <div className="loader"></div>
                                      ) : (
                                        <>
                                          <PhotoIcon className="-ml-0.5 mr-1.5 h-5 w-5" aria-hidden="true" />
                                          Upload Photo
                                        </>
                                      )}
                                    </button>
                                  </div>
                                ) : (
                                  // Upload prompt
                                  <div className="space-y-2">
                                    <div className="flex flex-col items-center">
                                      <PhotoIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
                                      <div className="mt-4 flex text-sm leading-6 text-gray-600">
                                        <label
                                          htmlFor="file-upload"
                                          className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                                        >
                                          <span>Upload a file</span>
                                          <input 
                                            id="file-upload" 
                                            name="imageurl" 
                                            type="file" 
                                            accept="image/*"
                                            className="sr-only" 
                                            onChange={(e) => {
                                              handleFileChange(e);
                                              // Automatically trigger upload when file is selected
                                              if (e.target.files[0]) {
                                                const formData = new FormData();
                                                formData.append('file', e.target.files[0]);
                                                axios.post('/api/upload', formData).then((res) => {
                                                  imgUrl(res.data.url);
                                                });
                                              }
                                            }}
                                          />
                                        </label>
                                        <p className="pl-1">or drag and drop</p>
                                      </div>
                                      <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                                    </div>
                                  </div>
                                )}
                              </div>
                            </div>
                            
                            {error.imageurl && (
                              <p className="mt-2 text-sm text-red-600">{error.imageurl}</p>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-start gap-x-6">
                  <button
                    type="submit"
                    onClick={editMode ? updateStudent : SubmitHandle}
                    className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    {editMode ? 'Update Student' : 'Add Student'}
                  </button>
                </div>
              </form>}
              {idopen && <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                <div
                  className="py-5"
                >
                  <div className="shrink-0">

                  </div>
                  <div className="min-w-0 flex-1">
                    <p>Student ID Card Number</p>
                    <div className="mt-2 flex max-w-md gap-x-4">

                      <input

                        name="idcard"
                        onChange={(e) => setIdnum(e.target.value)}
                        type="text"
                        placeholder="Enter your numbeer"
                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400"
                      />
                      <button
                        onClick={idgenerate}
                        type="submit"
                        className="flex flex-wrap gap-2 rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      >
                        Generate
                      </button>
                    </div>
                  </div>
                </div>
                {idcardshow ? <div className="w-full p-16">
                  <div className="relative mx-auto max-w-2xl rounded-[40px] bg-gradient-to-br from-[#2C3988]/80 via-[#2C3988]/20 to-[#2C3988]/80 p-[1px]">
                    <div className="relative rounded-[40px] bg-[#cdcfeb] p-12">
                      <h1 className="mb-8 text-4xl font-bold text-white">ID Card Preview</h1>
                      <p className="text-xl leading-relaxed text-gray-400">
                        Enter student ID number above to generate ID card.
                      </p>
                    </div>
                  </div>
                </div> : iloader ? <div className="loader"></div>  : <div className="space-x-3 py-4 " >
                  <div className="min-w-0">
                    <div className="h-[340px] w-[540px] p-4 rounded-xl bg-white shadow-xl relative overflow-hidden" id="yourDivId">
                      {/* Decorative background elements - adjusted size */}
                      <div className="absolute top-0 right-0 w-40 h-40 bg-indigo-600/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                      <div className="absolute bottom-0 left-0 w-28 h-28 bg-purple-600/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
                      
                      {/* Header with logo and title */}
                      <div className="flex items-center gap-3 border-b border-gray-100 pb-3">
                        <div className="h-14 w-14 rounded-full bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center">
                          <span className="text-xl font-bold text-white">SSB</span>
                        </div>
                        <div>
                          <h1 className="text-base font-bold text-gray-900">Shri Sai Baba</h1>
                          <p className="text-xs text-gray-600">Aadarsh Mahavidyalaya</p>
                        </div>
                      </div>

                      {/* Main content area */}
                      <div className="mt-3 flex gap-4">
                        {/* Left column - Photo and basic info */}
                        <div className="w-1/3">
                          <div className="aspect-square rounded-xl overflow-hidden border-2 border-gray-100 shadow-md">
                            <img
                              src={iddetails.imageurl || "default-image-url"}
                              alt="Student"
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="mt-1.5 text-center">
                            <span className="inline-block px-2 py-0.5 bg-indigo-50 text-indigo-700 rounded-full text-[10px] font-medium">
                              Student ID: {iddetails.studentid}
                            </span>
                          </div>
                        </div>

                        {/* Right column - Details */}
                        <div className="flex-1 space-y-2">
                          <div>
                            <h2 className="text-lg font-bold text-gray-900">{iddetails.fullname}</h2>
                            <p className="text-xs text-indigo-600 font-medium">{iddetails.course}</p>
                          </div>

                          <div className="grid grid-cols-2 gap-2 text-xs">
                            <div className="space-y-0.5">
                              <p className="text-[10px] font-medium text-gray-500">Date of Birth</p>
                              <p className="font-medium text-gray-900">{iddetails.dob}</p>
                            </div>
                            <div className="space-y-0.5">
                              <p className="text-[10px] font-medium text-gray-500">Contact</p>
                              <p className="font-medium text-gray-900">{iddetails.phoneNumber}</p>
                            </div>
                            <div className="space-y-0.5 col-span-2">
                              <p className="text-[10px] font-medium text-gray-500">Address</p>
                              <p className="font-medium text-gray-900 truncate">{iddetails.address}</p>
                            </div>
                            <div className="space-y-0.5">
                              <p className="text-[10px] font-medium text-gray-500">Valid Until</p>
                              <p className="font-medium text-gray-900">{iddetails.expiry}</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Footer with only principal signature */}
                      <div className="absolute bottom-3 right-4">
                        <div className="flex items-center gap-2">
                          <div className="h-6 w-6 rounded-full bg-indigo-600/10 flex items-center justify-center">
                            <svg className="w-3 h-3 text-indigo-600" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1.177-7.86l-2.765-2.767L7 12.431l3.119 3.121a1 1 0 001.414 0l5.952-5.95-1.062-1.062-5.6 5.6z" />
                            </svg>
                          </div>
                          <div className="text-center">
                            <div className="w-16 h-0.5 bg-gradient-to-r from-indigo-600 to-purple-600"></div>
                            <p className="mt-0.5 text-[10px] text-gray-500">Principal Signature</p>
                          </div>
                        </div>
                      </div>
                    </div>




                  </div>
                  <div className="py-2">
                    <button
                      onClick={takeScreenshot}
                      className="flex-none rounded-md bg-purple-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-purple-500 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600"
                    >Download ID Card</button>
                  </div>

                </div>}


              </div>}




            </div>

            <div className="sm:flex sm:items-center">
              <div className="sm:flex-auto mt-10">
                <h1 className="text-base font-semibold text-gray-900">Students</h1>
                <p className="mt-2 text-sm text-gray-700">
                  A list of all the students in your account including.
                </p>
              </div>
              <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
                <div className="mt-6 flex max-w-md gap-x-4">
                  <div className="flex flex-1 justify-center px-2 lg:ml-6 lg:justify-end">
                    <div className="grid w-full max-w-lg grid-cols-1 lg:max-w-xs">
                      <input
                        name="search"
                        type="search"
                        onChange={(e)=>{
                          setName(e.target.value)
                          }}
                        placeholder="Search"
                        aria-label="Search"
                        className="col-start-1 row-start-1 block w-full rounded-md bg-gray-300 py-1.5 pl-10 pr-3 text-base text-white outline-none placeholder:text-gray-400 focus:bg-white focus:text-gray-900 focus:placeholder:text-gray-400 sm:text-sm/6 focus:outline-indigo-500"
                      />
                      <MagnifyingGlassIcon
                        aria-hidden="true"
                        className="pointer-events-none col-start-1 row-start-1 ml-3 size-5 self-center text-gray-400"
                      />
                    </div>
                  </div>
                  <button
                  onClick={searchUser}
                    type="submit"
                    className="flex-none rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Search
                  </button>
                </div>
              </div>
            </div>
            <div className="mt-8 flow-root">
              <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 align-middle">
                  <div className="overflow-hidden shadow-sm ring-1 ring-gray-300 rounded-lg">
                    <table className="min-w-full divide-y divide-gray-300">
                      <thead className="bg-gray-50">
                        <tr>
                          <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                            S.N
                          </th>
                          <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                            Name
                          </th>
                          <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                            Email
                          </th>
                          <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                            ID Number
                          </th>
                          <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                            Address
                          </th>
                          <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                            <span className="sr-only">Actions</span>
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200 bg-white">
                        {currentRows.map((person, index) => (
                          <tr key={person.email} className="hover:bg-gray-50 transition-colors duration-200">
                            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                              {indexOfFirstRow + index + 1}
                            </td>
                            <td className="whitespace-nowrap px-3 py-4">
                              <div className="flex items-center">
                                <div className="h-10 w-10 flex-shrink-0">
                                  <img className="h-10 w-10 rounded-full object-cover" src={person.imageurl} alt="" />
                                </div>
                                <div className="ml-4">
                                  <div className="font-medium text-gray-900">{person.fullname}</div>
                                  <div className="text-gray-500">{person.course}</div>
                                </div>
                              </div>
                            </td>
                            <td className="whitespace-nowrap px-3 py-4">
                              <div className="text-sm text-gray-900">{person.email}</div>
                            </td>
                            <td className="whitespace-nowrap px-3 py-4">
                              <span className="inline-flex items-center rounded-full bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10">
                                {person.studentid}
                              </span>
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 max-w-xs truncate">
                              {person.address}
                            </td>
                            <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                              <div className="flex items-center justify-end gap-3">
                                <button
                                  onClick={() => {
                                    setOpen(true);
                                    setIddel(person.id);
                                  }}
                                  className="text-red-600 hover:text-red-900 transition-colors duration-200"
                                >
                                  <TrashIcon className="h-5 w-5" />
                                </button>
                                <button
                                  onClick={() => handleEditClick(person)}
                                  className="text-indigo-600 hover:text-indigo-900 transition-colors duration-200"
                                >
                                  <PencilSquareIcon className="h-5 w-5" />
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              
              {/* Empty state */}
              {student.length === 0 && (
                <div className="text-center py-12">
                  <svg
                    className="mx-auto h-12 w-12 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                />
              </svg>
              <h3 className="mt-2 text-sm font-medium text-gray-900">No students</h3>
              <p className="mt-1 text-sm text-gray-500">Get started by adding a new student.</p>
            </div>
          )}
        </div>
        <div className="mt-4 flex items-center justify-between px-4 py-3 sm:px-6">
          <div className="flex flex-1 justify-between sm:hidden">
            {/* Mobile pagination */}
            <button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="relative inline-flex items-center rounded-md px-4 py-2 text-sm font-medium text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors duration-200"
            >
              Previous
            </button>
            <button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="relative ml-3 inline-flex items-center rounded-md px-4 py-2 text-sm font-medium text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors duration-200"
            >
              Next
            </button>
          </div>
          <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
            <div>
              <p className="text-sm text-gray-700">
                Showing <span className="font-medium">{indexOfFirstRow + 1}</span> to{' '}
                <span className="font-medium">
                  {Math.min(indexOfLastRow, student.length)}
                </span>{' '}
                of <span className="font-medium">{student.length}</span> results
              </p>
            </div>
            <div>
              <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
                <button
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className="relative inline-flex items-center rounded-l-md px-3 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
                >
                  <span className="sr-only">Previous</span>
                  <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clipRule="evenodd" />
                  </svg>
                </button>
                {/* Page numbers */}
                {[...Array(totalPages)].map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentPage(idx + 1)}
                    className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold ${
                      currentPage === idx + 1
                        ? 'z-10 bg-indigo-600 text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                        : 'text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0'
                    } transition-colors duration-200`}
                  >
                    {idx + 1}
                  </button>
                ))}
                <button
                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className="relative inline-flex items-center rounded-r-md px-3 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
                >
                  <span className="sr-only">Next</span>
                  <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10l-3.938-3.71a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                  </svg>
                </button>
              </nav>
            </div>
          </div>
        </div>
      </main>
      <Dialog open={open} onClose={setOpen} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500/75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
          >
            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div className="mx-auto flex size-12 shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:size-10">
                  <ExclamationTriangleIcon aria-hidden="true" className="size-6 text-red-600" />
                </div>
                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                  <DialogTitle as="h3" className="text-base font-semibold text-gray-900">
                    Delete account
                  </DialogTitle>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                    Are you sure you want to delete this student?.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
              <button
                type="button"
                onClick={deleteuser}
                className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 ease-in-out sm:ml-3 sm:w-auto"
              >
                Delete
              </button>
              <button
                type="button"
                data-autofocus
               
                onClick={handleCloseForm}
                className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 ease-in-out sm:mt-0 sm:w-auto"
              >
                Cancel
              </button>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
    {/* Edit Student Modal */}
    {showEditModal && (
      <div className="fixed inset-0 bg-gray-900/50 backdrop-blur-sm overflow-y-auto h-full w-full flex items-center justify-center z-50">
        <div className="bg-white rounded-xl shadow-xl w-full max-w-md p-8 relative">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Edit Student</h3>
          <ErrorBoundary>
            <form onSubmit={handleUpdateStudent} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  required
                  value={editingStudent.fullname}
                  onChange={(e) => setEditingStudent({...editingStudent, fullname: e.target.value})}
                  className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Student ID</label>
                <input
                  type="text"
                  required
                  value={editingStudent.studentid}
                  onChange={(e) => setEditingStudent({...editingStudent, studentid: e.target.value})}
                  className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Status</label>
                <select
                  value={editingStudent.status}
                  onChange={(e) => setEditingStudent({...editingStudent, status: e.target.value})}
                  className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                </select>
              </div>
              <div className="flex justify-end space-x-3 mt-6">
                <button
                  type="button"
                  onClick={() => {
                    setShowEditModal(false);
                    setEditingStudent(null);
                  }}
                  className="px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 border border-gray-300 rounded-lg"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-200"
                >
                  Update Student
                </button>
              </div>
            </form>
          </ErrorBoundary>
        </div>
      </div>
    )}
    {/* Add Student Modal */}
    {showAddModal && (
      <div className="fixed inset-0 bg-gray-900/50 backdrop-blur-sm overflow-y-auto h-full w-full flex items-center justify-center z-50">
        <div className="bg-white rounded-xl shadow-xl w-full max-w-md p-8 relative">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Add New Student</h3>
          
          <ErrorBoundary>
            <form onSubmit={handleAddStudent} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  required
                  value={newStudent.name}
                  onChange={(e) => setNewStudent(prev => ({...prev, name: e.target.value}))}
                  className={`mt-1 block w-full rounded-lg border 
                    ${errors.name ? 'border-red-300 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500'}
                    px-3 py-2 focus:ring-2 focus:border-transparent`}
                  placeholder="Enter student name"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                )}
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700">Student ID</label>
                <input
                  type="text"
                  required
                  value={newStudent.studentId}
                  onChange={(e) => setNewStudent(prev => ({...prev, studentId: e.target.value}))}
                  className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter student ID"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Status</label>
                <select
                  value={newStudent.status}
                  onChange={(e) => setNewStudent(prev => ({...prev, status: e.target.value}))}
                  className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                </select>
              </div>

              <div className="flex justify-end space-x-3 mt-6">
                <button
                  type="button"
                  onClick={() => {
                    resetForm();
                    setShowAddModal(false);
                  }}
                  className="px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 border border-gray-300 rounded-lg"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className={`px-4 py-2 text-sm font-medium text-white 
                    bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg 
                    ${isLoading ? 'opacity-50 cursor-not-allowed' : 'hover:from-blue-700 hover:to-indigo-700'}
                    transition-all duration-200`}
                >
                  {isLoading ? 'Adding...' : 'Add Student'}
                </button>
              </div>
            </form>
          </ErrorBoundary>
        </div>
      </div>
    )}
    </div>
  )
}

