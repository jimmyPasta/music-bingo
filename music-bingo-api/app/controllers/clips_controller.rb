class ClipsController < ApplicationController
  before_action :set_clip, only: [:show, :update, :destroy]

  # GET /clips
  def index
    paginate json: Clip.all, per_page: 25
  end

  # GET /clips/1
  def show
    render json: @clip
  end

  # POST /clips
  def create
    @clip = Clip.new(clip_params)

    if @clip.save
      render json: @clip, status: :created, location: @clip
    else
      render json: @clip.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /clips/1
  def update
    if @clip.update(clip_params)
      render json: @clip
    else
      render json: @clip.errors, status: :unprocessable_entity
    end
  end

  # DELETE /clips/1
  def destroy
    @clip.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_clip
      @clip = Clip.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def clip_params
      params.require(:clip).permit(:name, :start, :length, :location)
    end
end
