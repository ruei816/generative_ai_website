/* PaperNote 論文索引：依使用者提供的原始 PDF 建立。 */
window.PAPERNOTE_PAPERS = [
  {
    "id": "dinomaly-2025",
    "slug": "dinomaly",
    "title": "Dinomaly: The Less Is More Philosophy in Multi-Class Unsupervised Anomaly Detection",
    "authors": [
      "Jia Guo",
      "Shuai Lu",
      "Weihang Zhang",
      "Fang Chen",
      "Huiqi Li",
      "Hongen Liao"
    ],
    "firstAuthor": "Jia Guo",
    "year": "2025",
    "venue": "2025 IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)",
    "doi": "10.1109/CVPR52734.2025.01900",
    "abstract": "本文提出 Dinomaly，一種以純 Transformer 架構為核心的多類別非監督異常偵測（MUAD）重建式框架。作者指出，單一模型處理多種類別時容易過度泛化，導致正常與異常特徵都能被重建，削弱異常辨識能力。Dinomaly 以預訓練 Vision Transformer、Noisy Bottleneck、Unfocused Linear Attention 與 Loose Reconstruction 四項簡潔設計，抑制 identity mapping 並保留異常重建誤差。在 MVTec-AD、VisA、Real-IAD 上，模型分別達到 99.6%、98.7%、89.3% 的 image-level AUROC，並展示模型規模與輸入解析度擴展的效益。",
    "summary": "以簡潔的 Transformer 重建架構解決多類別異常偵測中的過度泛化問題；結合預訓練 ViT、Dropout 瓶頸、Linear Attention 與寬鬆重建，在三個基準資料集取得具競爭力的結果。",
    "keywords": [
      "Multi-Class Unsupervised Anomaly Detection",
      "Vision Transformer",
      "Noisy Bottleneck",
      "Linear Attention",
      "Feature Reconstruction"
    ],
    "updatedAt": "2026-11-10",
    "page": "papers/dinomaly/index.html",
    "pdf": "papers/dinomaly/paper.pdf",
    "originalUrl": "https://doi.org/10.1109/CVPR52734.2025.01900",
    "topics": []
  },
  {
    "id": "gaucho-2025",
    "slug": "gaucho",
    "title": "GauCho: Gaussian Distributions with Cholesky Decomposition for Oriented Object Detection",
    "authors": [
      "José Henrique Lima Marques",
      "Jeffri Murrugarra-Llerena",
      "Claudio R. Jung"
    ],
    "firstAuthor": "José Henrique Lima Marques",
    "year": "2025",
    "venue": "2025 IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)",
    "doi": "10.1109/CVPR52734.2025.00340",
    "abstract": "本文提出 GauCho，一種用於方向物件偵測（Oriented Object Detection, OOD）的迴歸頭，直接透過 Cholesky 分解預測高斯分布參數，以緩解傳統方向邊界框在角度邊界處的不連續問題，並相容於近期以高斯分布為基礎的迴歸損失函數。作者亦提出以方向橢圓（Oriented Ellipses）表示方向物件，透過與 GauCho 的雙射關係，降低圓形物件的編碼歧義。論文在 DOTA 資料集上的實驗顯示，GauCho 可作為傳統方向邊界框迴歸頭的替代方案，並取得可與先進偵測器相比或更佳的結果。",
    "summary": "提出以 Cholesky 分解直接預測高斯分布的 GauCho 迴歸頭，改善方向物件偵測的角度邊界不連續問題，並探討方向橢圓表示法。",
    "keywords": [
      "Oriented Object Detection",
      "Gaussian Distributions",
      "Cholesky Decomposition",
      "Oriented Ellipses",
      "DOTA"
    ],
    "updatedAt": "2026-11-10",
    "page": "papers/gaucho/index.html",
    "pdf": "papers/gaucho/paper.pdf",
    "originalUrl": "https://doi.org/10.1109/CVPR52734.2025.00340",
    "topics": []
  },
  {
    "id": "gda-iod-2025",
    "slug": "gda-iod",
    "title": "Gradient Decomposition and Alignment for Incremental Object Detection",
    "authors": [
      "Wenlong Luo",
      "Shizhou Zhang",
      "De Cheng",
      "Yinghui Xing",
      "Guoqiang Liang",
      "Peng Wang",
      "Yanning Zhang"
    ],
    "firstAuthor": "Wenlong Luo",
    "year": "2025",
    "venue": "2025 IEEE/CVF International Conference on Computer Vision (ICCV)",
    "abstract": "本文提出 GDA-IOD，用於增量式物件偵測（IOD）。方法先以 Gaussian Mixture Model（GMM）分析舊模型對目前訓練影像的預測信心，將結果分為低、中、高信心區域：高信心舊類別預測作為 pseudo labels，中信心區域則視為潛在前景，避免被 RPN 當成背景。接著將舊類別 pseudo-label loss 的梯度與整體梯度分解；若兩者方向衝突，便將整體梯度投影至舊類別梯度的正交方向，以保留舊知識並學習新類別。",
    "summary": "以 GMM 偽標籤找回未標註的舊類別物件，再透過梯度分解與對齊降低增量學習的災難性遺忘。",
    "keywords": [
      "Incremental Object Detection",
      "Gaussian Mixture Model",
      "Pseudo Labeling",
      "Gradient Alignment",
      "Catastrophic Forgetting"
    ],
    "updatedAt": "2026-11-11",
    "page": "papers/gda-iod/index.html",
    "pdf": "papers/gda-iod/paper.pdf",
    "originalUrl": "https://github.com/FHR-L/GDA-IOD",
    "topics": []
  }
];
