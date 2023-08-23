import ParamDynamicPromptsCollapse from 'features/dynamicPrompts/components/ParamDynamicPromptsCollapse';
import ParamLoraCollapse from 'features/lora/components/ParamLoraCollapse';
import ParamInfillAndScalingCollapse from 'features/parameters/components/Parameters/Canvas/InfillAndScaling/ParamInfillAndScalingCollapse';
import ParamMaskAdjustmentCollapse from 'features/parameters/components/Parameters/Canvas/MaskAdjustment/ParamMaskAdjustmentCollapse';
import ParamCanvasRefinePassCollapse from 'features/parameters/components/Parameters/Canvas/SeamPainting/ParamCanvasRefinePassCollapse';
import ParamControlNetCollapse from 'features/parameters/components/Parameters/ControlNet/ParamControlNetCollapse';
import ParamNoiseCollapse from 'features/parameters/components/Parameters/Noise/ParamNoiseCollapse';
import ParamSDXLPromptArea from './ParamSDXLPromptArea';
import ParamSDXLRefinerCollapse from './ParamSDXLRefinerCollapse';
import SDXLUnifiedCanvasTabCoreParameters from './SDXLUnifiedCanvasTabCoreParameters';

export default function SDXLUnifiedCanvasTabParameters() {
  return (
    <>
      <ParamSDXLPromptArea />
      <SDXLUnifiedCanvasTabCoreParameters />
      <ParamSDXLRefinerCollapse />
      <ParamControlNetCollapse />
      <ParamLoraCollapse />
      <ParamDynamicPromptsCollapse />
      <ParamNoiseCollapse />
      <ParamMaskAdjustmentCollapse />
      <ParamInfillAndScalingCollapse />
      <ParamCanvasRefinePassCollapse />
    </>
  );
}