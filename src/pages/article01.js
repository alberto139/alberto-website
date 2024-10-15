import React from "react";
import Navbar from "../components/Navbar";
import articleImage from '../imgs/steering.gif'; // Updated image

function Article01() {
  return (
    <div className="min-h-screen min-w-screen bg-gray-100">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="container mx-auto p-8">
        {/* Article Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <h1 className="text-4xl font-extrabold mb-4 text-gray-800">How Deep Learning is Changing the Game in Computer Vision</h1>
          <p className="text-sm text-gray-500 mb-2">Published on October 14, 2024</p>
          <p className="text-sm text-gray-700">By Alberto Rivera</p>
        </div>

        {/* Featured Image */}
        <div className="mb-12">
          <img
            src={articleImage}
            alt="Deep learning computer vision example"
            className="w-full max-w-4xl mx-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Article Introduction */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Introduction</h2>
          <p className="text-lg leading-relaxed text-gray-700">
            In recent years, <span className="font-semibold text-gray-800">deep learning</span> has revolutionized the field of computer vision, enabling machines to "see" and understand the world in ways that were once considered science fiction. This article explores the major breakthroughs in deep learning and their real-world applications.
          </p>
        </div>

        {/* Article Content */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Major Breakthroughs in Deep Learning</h2>
          <p className="text-lg leading-relaxed text-gray-700 mb-6">
            One of the most impactful developments has been the introduction of <strong>Convolutional Neural Networks (CNNs)</strong>, which significantly improved the accuracy of image classification, object detection, and segmentation. In addition, techniques like <em>transfer learning</em> and <em>data augmentation</em> have allowed deep learning models to perform exceptionally well in industry, even with smaller datasets.
          </p>
          <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
            <li><span className="font-semibold">CNNs</span> allow machines to "see" through multiple layers of understanding, mimicking how the human visual system works.</li>
            <li><span className="font-semibold">Transfer Learning</span> enables models to build on pre-trained knowledge, reducing the training time for new tasks.</li>
            <li><span className="font-semibold">Data Augmentation</span> helps increase the diversity of data, making models more robust to unseen inputs.</li>
          </ul>
        </div>

        {/* Real-World Applications */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Real-World Applications</h2>
          <p className="text-lg leading-relaxed text-gray-700">
            Today, deep learning is used in a variety of sectors, including healthcare, autonomous vehicles, security, and retail analytics. For example:
          </p>
          <ol className="list-decimal list-inside text-lg text-gray-700 space-y-2 mt-4">
            <li>In <strong>healthcare</strong>, deep learning models help detect diseases from medical images, providing faster diagnoses.</li>
            <li>Autonomous vehicles use <strong>computer vision</strong> to perceive their surroundings, making real-time decisions to ensure safety.</li>
            <li>Retailers utilize <strong>deep learning</strong> to analyze customer behavior, optimize product placements, and even detect theft in stores.</li>
          </ol>
        </div>

        {/* Technical Details Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Technical Details: How It Works</h2>
          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            At the heart of many of these breakthroughs lies the convolution operation. A CNN processes an image by sliding small filters (also known as kernels) over the image to detect important features, such as edges, textures, and objects. These filters learn to recognize patterns through backpropagation, optimizing the network’s ability to classify or detect objects.
          </p>
          <p className="text-lg leading-relaxed text-gray-700">
            The deeper the network, the more abstract features it can learn. Early layers might detect simple shapes, while deeper layers can detect complex patterns, such as faces or cars.
          </p>
        </div>

        {/* Conclusion */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Conclusion</h2>
          <p className="text-lg leading-relaxed text-gray-700">
            Deep learning continues to push the boundaries of computer vision. With more powerful models and innovative applications emerging every year, this technology is transforming industries and paving the way for new solutions. The future of deep learning is bright, and its impact will only grow in the years to come.
          </p>
        </div>

        {/* Call to Action */}
        <div className="my-8 text-center">
          <p className="text-lg font-semibold text-gray-800">Interested in more articles? Check out our <a href="/blog" className="text-blue-600 hover:underline">blog</a> for more on deep learning and computer vision.</p>
        </div>
      </div>
    </div>
  );
}

export default Article01;
