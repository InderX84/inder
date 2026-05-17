import ciscoC1 from '../assests/CISCO/2210990598 Cybersecurity Essentials.pdf';
import ciscoC2 from '../assests/CISCO/2210990598 Introduction To Cybersecurity.pdf';
import ciscoC3 from '../assests/CISCO/2210990598 Introduction to Packet Tracer.pdf';
import ciscoC4 from '../assests/CISCO/CU-COE _ STU6641995e6cdd11715575134.pdf';

import dlC0 from '../assests/coursera/7th sem/Deep Learning pytorch/00 IBM Deep Learning with PyTorch, Keras and Tensorflow.pdf';
import dlC1 from '../assests/coursera/7th sem/Deep Learning pytorch/01 Introduction to Deep Learning & Neural Networks.pdf';
import dlC2 from '../assests/coursera/7th sem/Deep Learning pytorch/02  Deep Learning with Keras and Tensorflow.pdf';
import dlC3 from '../assests/coursera/7th sem/Deep Learning pytorch/03  Introduction to Neural Networks and PyTorch.pdf';
import dlC4 from '../assests/coursera/7th sem/Deep Learning pytorch/04 Deep Learning with PyTorch.pdf';
import dlC5 from '../assests/coursera/7th sem/Deep Learning pytorch/05  AI Capstone Project with Deep Learning.pdf';

import wfC0 from '../assests/coursera/7th sem/IBM workflow/00 IBM AI Enterprise Workflow.pdf';
import wfC1 from '../assests/coursera/7th sem/IBM workflow/01 Business Priorities and Data.pdf';
import wfC2 from '../assests/coursera/7th sem/IBM workflow/02 Data Analysis and Hypothesis Testing.pdf';
import wfC3 from '../assests/coursera/7th sem/IBM workflow/03 Feature Engineering and Bias Detection.pdf';
import wfC4 from '../assests/coursera/7th sem/IBM workflow/04 Machine Learning, Visual Recognition and NLP.pdf';
import wfC5 from '../assests/coursera/7th sem/IBM workflow/05 Enterprise Model Deployment.pdf';
import wfC6 from '../assests/coursera/7th sem/IBM workflow/06 AI in Production.pdf';

import sapC1 from '../assests/coursera/7th sem/SAP/ABAP RESTful Programming Model (RAP) and Extensions.pdf';
import sapC2 from '../assests/coursera/7th sem/SAP/Becoming an SAP Professional.pdf';
import sapC3 from '../assests/coursera/7th sem/SAP/Learn SAP ABAP Fundamentals and Core Programming Concepts.pdf';
import sapC4 from '../assests/coursera/7th sem/SAP/SAP Professional Fundamentals.pdf';
import sapC5 from '../assests/coursera/7th sem/SAP/Scaling SAP ABAP with RESTful Programming Model (RAP).pdf';

import agC1 from '../assests/coursera/8th sem/2/Agile Planning for Software Products.pdf';
import agC2 from '../assests/coursera/8th sem/2/Client Needs and Software Requirements.pdf';
import agC3 from '../assests/coursera/8th sem/2/Introduction to Software Product Management.pdf';
import agC4 from '../assests/coursera/8th sem/2/Reviews & Metrics for Software Improvements.pdf';
import agC5 from '../assests/coursera/8th sem/2/Software Processes and Agile Practices.pdf';

import pyC1 from '../assests/coursera/8th sem/python/AI for Scientific Research.pdf';
import pyC2 from '../assests/coursera/8th sem/python/Capstone Project Advanced AI for Drug Discovery.pdf';
import pyC3 from '../assests/coursera/8th sem/python/Introduction to Data Science and scikit-learn in Python.pdf';
import pyC4 from '../assests/coursera/8th sem/python/Machine Learning Models in Science.pdf';
import pyC5 from '../assests/coursera/8th sem/python/Neural Networks and Random Forests.pdf';

import genC1 from '../assests/coursera/Generative Ai/Building AI Powered Chatbots Without.pdf';
import genC2 from '../assests/coursera/Generative Ai/Generative AI Elevate your Software Development.pdf';
import genC3 from '../assests/coursera/Generative Ai/Generative AI Introduction and Applications.pdf';
import genC4 from '../assests/coursera/Generative Ai/Generative AI Prompt Engineering Basics.pdf';
import genC5 from '../assests/coursera/Generative Ai/Introduction to Artificial Intelligence (AI).pdf';

import ibmC1 from '../assests/coursera/IBM/AI Workflow Business Priorities and Data Ingestion.pdf';
import ibmC2 from '../assests/coursera/IBM/AI Workflow Data Analysis and Hypothesis Testing.pdf';
import ibmC3 from '../assests/coursera/IBM/AI Workflow Feature Engineering and Bias Detection.pdf';

import intC1 from '../assests/coursera/Interview/2210990598_Narinder.pdf';
import intC2 from '../assests/coursera/Interview/Coding Interview Preparation.pdf';
import intC3 from '../assests/coursera/Interview/The Art of the Job Interview.pdf';

import uxC1 from '../assests/coursera/UX Design/1.pdf';
import uxC2 from '../assests/coursera/UX Design/2.pdf';
import uxC3 from '../assests/coursera/UX Design/3.pdf';
import uxC4 from '../assests/coursera/UX Design/4.pdf';

export const certificateCategories = [
  {
    id: 'cisco',
    label: 'CISCO',
    items: [
      { title: 'Cybersecurity Essentials', file: ciscoC1 },
      { title: 'Introduction to Cybersecurity', file: ciscoC2 },
      { title: 'Introduction to Packet Tracer', file: ciscoC3 },
      { title: 'CU-COE Certificate', file: ciscoC4 },
    ],
  },
  {
    id: 'deep-learning',
    label: 'Deep Learning',
    items: [
      { title: 'IBM Deep Learning with PyTorch, Keras & TensorFlow', file: dlC0 },
      { title: 'Introduction to Deep Learning & Neural Networks', file: dlC1 },
      { title: 'Deep Learning with Keras and TensorFlow', file: dlC2 },
      { title: 'Introduction to Neural Networks and PyTorch', file: dlC3 },
      { title: 'Deep Learning with PyTorch', file: dlC4 },
      { title: 'AI Capstone Project with Deep Learning', file: dlC5 },
    ],
  },
  {
    id: 'ibm-workflow',
    label: 'IBM AI Workflow',
    items: [
      { title: 'IBM AI Enterprise Workflow', file: wfC0 },
      { title: 'Business Priorities and Data', file: wfC1 },
      { title: 'Data Analysis and Hypothesis Testing', file: wfC2 },
      { title: 'Feature Engineering and Bias Detection', file: wfC3 },
      { title: 'Machine Learning, Visual Recognition and NLP', file: wfC4 },
      { title: 'Enterprise Model Deployment', file: wfC5 },
      { title: 'AI in Production', file: wfC6 },
    ],
  },
  {
    id: 'sap',
    label: 'SAP',
    items: [
      { title: 'ABAP RESTful Programming Model (RAP) and Extensions', file: sapC1 },
      { title: 'Becoming an SAP Professional', file: sapC2 },
      { title: 'SAP ABAP Fundamentals and Core Programming Concepts', file: sapC3 },
      { title: 'SAP Professional Fundamentals', file: sapC4 },
      { title: 'Scaling SAP ABAP with RESTful Programming Model', file: sapC5 },
    ],
  },
  {
    id: 'agile',
    label: 'Agile & PM',
    items: [
      { title: 'Agile Planning for Software Products', file: agC1 },
      { title: 'Client Needs and Software Requirements', file: agC2 },
      { title: 'Introduction to Software Product Management', file: agC3 },
      { title: 'Reviews & Metrics for Software Improvements', file: agC4 },
      { title: 'Software Processes and Agile Practices', file: agC5 },
    ],
  },
  {
    id: 'python-ml',
    label: 'Python & ML',
    items: [
      { title: 'AI for Scientific Research', file: pyC1 },
      { title: 'Capstone: Advanced AI for Drug Discovery', file: pyC2 },
      { title: 'Introduction to Data Science and scikit-learn', file: pyC3 },
      { title: 'Machine Learning Models in Science', file: pyC4 },
      { title: 'Neural Networks and Random Forests', file: pyC5 },
    ],
  },
  {
    id: 'generative-ai',
    label: 'Generative AI',
    items: [
      { title: 'Building AI Powered Chatbots', file: genC1 },
      { title: 'Generative AI: Elevate your Software Development', file: genC2 },
      { title: 'Generative AI: Introduction and Applications', file: genC3 },
      { title: 'Generative AI: Prompt Engineering Basics', file: genC4 },
      { title: 'Introduction to Artificial Intelligence (AI)', file: genC5 },
    ],
  },
  {
    id: 'ibm',
    label: 'IBM',
    items: [
      { title: 'AI Workflow: Business Priorities and Data Ingestion', file: ibmC1 },
      { title: 'AI Workflow: Data Analysis and Hypothesis Testing', file: ibmC2 },
      { title: 'AI Workflow: Feature Engineering and Bias Detection', file: ibmC3 },
    ],
  },
  {
    id: 'interview',
    label: 'Interview Prep',
    items: [
      { title: 'Narinder — Interview Certificate', file: intC1 },
      { title: 'Coding Interview Preparation', file: intC2 },
      { title: 'The Art of the Job Interview', file: intC3 },
    ],
  },
  {
    id: 'ux',
    label: 'UX Design',
    items: [
      { title: 'UX Design — Course 1', file: uxC1 },
      { title: 'UX Design — Course 2', file: uxC2 },
      { title: 'UX Design — Course 3', file: uxC3 },
      { title: 'UX Design — Course 4', file: uxC4 },
    ],
  },
];
